import axios from "axios";

const params = {
  headers: {
    Authorization:
      "Bearer " +
      "4448b6332db540e719d3cec7abf5960927a679ba1d75c35225476e9836561d13abaff4332c93871263dc01963f7a80079b106f69b305669766e9c34927f8bdb2fa7e7f028fcd24891f89c5855a6ee180ed8b75f9aabd730a4d16195adc51f2aaae7e4aa34edcdb4855760ce0122108d4fe883ddf72a6b646ede4ef62694d3cdb",
  },
};

export const FetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:1337" + url, params);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    Authorization:
      "Bearer " +
      "4448b6332db540e719d3cec7abf5960927a679ba1d75c35225476e9836561d13abaff4332c93871263dc01963f7a80079b106f69b305669766e9c34927f8bdb2fa7e7f028fcd24891f89c5855a6ee180ed8b75f9aabd730a4d16195adc51f2aaae7e4aa34edcdb4855760ce0122108d4fe883ddf72a6b646ede4ef62694d3cdb",
  },
});

//4448b6332db540e719d3cec7abf5960927a679ba1d75c35225476e9836561d13abaff4332c93871263dc01963f7a80079b106f69b305669766e9c34927f8bdb2fa7e7f028fcd24891f89c5855a6ee180ed8b75f9aabd730a4d16195adc51f2aaae7e4aa34edcdb4855760ce0122108d4fe883ddf72a6b646ede4ef62694d3cdb
