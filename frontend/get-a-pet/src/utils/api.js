import axios from "axios";

const api = axios.create({
  baseURL: "https://getapet-api-0915272b9344.herokuapp.com",
});

export default api;
