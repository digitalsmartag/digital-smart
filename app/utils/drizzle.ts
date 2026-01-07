import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "../../drizzle/schema";


declare global {
  var db: ReturnType<typeof drizzle> | undefined;
}

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});


if (process.env.NODE_ENV !== "production") {
  global.db = global.db ?? drizzle(client, { schema });
}

export const db = global.db ?? drizzle(client, { schema });
