// Andre

import axios from "redaxios";

const url = "http://localhost:3001/Exemple";

export const getApi = async () => {
  try {
    const reponse = await axios.get(url);
    return reponse.data;
  } catch (error) {
    alert("Burro liga a api carai: npm run server ");
  }
};
