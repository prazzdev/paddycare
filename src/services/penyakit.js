import axios from "axios";

const fetchAllPenyakit = async () => {
  try {
    const res = await axios.get("/api/penyakit");
    return res.data;
  } catch (error) {
    return new Error();
  }
};

export { fetchAllPenyakit };
