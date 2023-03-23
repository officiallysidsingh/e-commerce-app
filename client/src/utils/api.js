import axios from "axios";

const STRAPI_API_KEY = import.meta.env.VITE_APP_STRIPE_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_DEV_URL;

const params = {
  headers: {
    Authorization: "bearer " + STRAPI_API_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
