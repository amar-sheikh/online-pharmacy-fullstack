import axios from "axios";

const params = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
  },
};

export const FetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_STRAPI_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.error("API Error:", err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
  },
});

