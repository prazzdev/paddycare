import { db } from "@/lib/db";

export async function findGejalaById(id) {
  return await db
    .selectFrom("gejala")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

export async function getAllGejala() {
  return await db.selectFrom("gejala").selectAll().execute();
}
