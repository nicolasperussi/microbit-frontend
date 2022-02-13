import axios from "axios";

const DEV_ENDPOINT = "http://localhost:443/api/v1";
// const PROD_ENDPOINT = "https://scriptburger.herokuapp.com/api/v1";

export const api = axios.create({
  baseURL: DEV_ENDPOINT,
});
