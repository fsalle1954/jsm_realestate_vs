import axios from "axios";

export const baseUrl = "bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "0046fb64bbmsh8f8f6c89ee5ef99p1dcf84jsn258c853c2668",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });
};
