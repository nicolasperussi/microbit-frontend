import axios from "axios";

const environments = {
  development: "http://localhost:3030/api/v1",
  production: "https://schoolmicrobit.herokuapp.com/api/v1",
};
export const api = axios.create({
  // @ts-ignore
  baseURL: environments[process.env.REACT_APP_VERCEL_ENV || "development"],
});
