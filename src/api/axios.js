import axios from "axios";
const axiosClient = axios.create({
  baseURL: `https://restcountries.com/v3.1/`,
});
export default axiosClient;
