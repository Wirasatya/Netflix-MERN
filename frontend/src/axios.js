import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8700/api/",
});

export default instance;
