import { getAllGejala } from "@/repositories/GejalaRepository";

export default async function handler(req, res) {
  try {
    const data = await getAllGejala();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
}
