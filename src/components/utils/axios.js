import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://preapi.aquaforce.cl/api",
});

export default axiosInstance;
