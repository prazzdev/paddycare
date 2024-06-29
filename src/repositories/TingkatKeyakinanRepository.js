import { db } from "@/lib/db";

export async function findTingkatKeyakinanById(id) {
  return await db
    .selectFrom("tingkat_keyakinan")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

export async function getAllTingkatKeyakinan() {
  return await db.selectFrom("tingkat_keyakinan").selectAll().execute();
}
