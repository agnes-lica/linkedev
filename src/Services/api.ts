import axios from "axios";

const api = axios.create({
  baseURL: "https://linkedev.herokuapp.com/",
  timeout: 5000,
});

export default api;
