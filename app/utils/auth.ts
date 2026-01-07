import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./drizzle";
import { user as userTable } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
  },
});

/**
 * Função helper que obtém a sessão e enriquece com o campo 'role' do banco de dados
 * Esta função adapta o better-auth para incluir campos customizados como 'role'
 */
export async function getSessionWithRole() {
  try {
    const sessionResult = await auth.api.getSession({
      headers: await headers(),
    });

    const user = sessionResult?.data?.user ?? null;

    // Se não há usuário, retorna a sessão como está
    if (!user?.id) {
      return sessionResult;
    }

    // Busca o role do banco de dados
    try {
      const rows = await db
        .select({
          role: userTable.role,
        })
        .from(userTable)
        .where(eq(userTable.id, user.id))
        .limit(1);

      const role = rows?.[0]?.role ?? "user";

      // Retorna a sessão enriquecida com o role
      return {
        ...sessionResult,
        data: {
          ...sessionResult.data,
          user: {
            ...user,
            role,
          },
        },
      };
    } catch (err) {
      console.error("Erro ao buscar role do usuário:", err);
      // Se falhar, retorna com role padrão
      return {
        ...sessionResult,
        data: {
          ...sessionResult.data,
          user: {
            ...user,
            role: "user",
          },
        },
      };
    }
  } catch (err) {
    console.error("Erro ao obter sessão:", err);
    return null;
  }
}
