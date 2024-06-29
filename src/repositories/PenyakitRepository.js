import { db } from "@/lib/db";

export async function findPenyakitById(id) {
  return await db
    .selectFrom("jenis_penyakit")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

export async function getAllPenyakit() {
  return await db.selectFrom("jenis_penyakit").selectAll().execute();
}
