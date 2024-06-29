import { getAllTingkatKeyakinan } from "@/repositories/TingkatKeyakinanRepository";

export default async function handler(req, res) {
  try {
    const data = await getAllTingkatKeyakinan();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
}
