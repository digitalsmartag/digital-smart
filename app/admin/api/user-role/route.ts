"use server";

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "../../../utils/auth";
import { db } from "../../../utils/drizzle";
import { user as userTable } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;
    if (!user?.id) {
      return NextResponse.json({ role: null }, { status: 200 });
    }

    const rows = await db
      .select({ role: userTable.role })
      .from(userTable)
      .where(eq(userTable.id, user.id))
      .limit(1);

    const role = rows?.[0]?.role ?? null;
    return NextResponse.json({ role });
  } catch (error) {
    return NextResponse.json({ role: null, error: "failed" }, { status: 200 });
  }
}
