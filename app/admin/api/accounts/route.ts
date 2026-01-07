import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../utils/drizzle";
import { user, account } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import crypto from "crypto";

// Helpers
const safeUser = (u: typeof user.$inferSelect) => ({
  id: u.id,
  name: u.name,
  email: u.email,
  role: u.role,
  createdAt: u.createdAt,
  updatedAt: u.updatedAt,
});

export async function GET() {
  const users = await db.select().from(user);
  return NextResponse.json({ users: users.map(safeUser) });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action } = body || {};

  if (action === "create") {
    const { name, email, password, role = "user" } = body;
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const userId = crypto.randomUUID();

    await db.insert(user).values({
      id: userId,
      name,
      email,
      role,
    });

    await db.insert(account).values({
      id: crypto.randomUUID(),
      accountId: email,
      providerId: "email",
      userId,
      password: hashed,
    });

    return NextResponse.json({ success: true });
  }

  if (action === "updateRole") {
    const { userId, role } = body;
    if (!userId || !role) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
    }
    await db.update(user).set({ role }).where(eq(user.id, userId));
    return NextResponse.json({ success: true });
  }

  if (action === "updatePassword") {
    const { userId, password } = body;
    if (!userId || !password) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
    }
    const hashed = await bcrypt.hash(password, 10);
    await db
      .update(account)
      .set({ password: hashed })
      .where(eq(account.userId, userId));
    return NextResponse.json({ success: true });
  }

  if (action === "delete") {
    const { userId } = body;
    if (!userId) {
      return NextResponse.json({ error: "userId obrigatório" }, { status: 400 });
    }
    await db.delete(account).where(eq(account.userId, userId));
    await db.delete(user).where(eq(user.id, userId));
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Ação inválida" }, { status: 400 });
}
