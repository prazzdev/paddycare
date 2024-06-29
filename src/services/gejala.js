import axios from "axios";

const fetchAllGejala = async () => {
  try {
    const res = await axios.get("/api/gejala");
    return res.data;
  } catch (error) {
    return new Error();
  }
};

export { fetchAllGejala };
