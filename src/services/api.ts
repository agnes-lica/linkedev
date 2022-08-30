import axios from "axios";

const api = axios.create({
  baseURL: "https://BASE_URL",
  timeout: 5000,
});

export default api;
