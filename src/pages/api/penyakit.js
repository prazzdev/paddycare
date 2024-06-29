import { getAllPenyakit } from "@/repositories/PenyakitRepository";

export default async function handler(req, res) {
  try {
    const data = await getAllPenyakit();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
}
