import axios from "axios";

const fetchAllTingkatKeyakinan = async () => {
  try {
    const res = await axios.get("/api/tingkat-keyakinan");
    return res.data;
  } catch (error) {
    return new Error();
  }
};

export { fetchAllTingkatKeyakinan };
