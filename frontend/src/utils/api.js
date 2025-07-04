import axios from "axios";

const baseURL = import.meta.env.VITE_STRAPI_URL;
const token = import.meta.env.VITE_STRAPI_TOKEN;

const params = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const FetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(baseURL + url, params);
    return data;
  } catch (err) {
    console.error("API Error:", err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const sendChatbotMessage = async (message) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/ask`,
      { message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Chatbot API error:", err);
    throw err;
  }
};
