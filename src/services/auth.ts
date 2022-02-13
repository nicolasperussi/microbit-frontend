import storage from "local-storage-fallback";
import { api } from "./api";

export const TOKEN_KEY = "@MicroBitPassToken";

export const isAuthenticated = () => storage.getItem(TOKEN_KEY) !== null;

export const getToken = () => storage.getItem(TOKEN_KEY);

export const login = async (userInfo: any) => {
  const data = {
    email: userInfo.email,
    password: userInfo.password,
  };

  api.post("/auth/login", data).then((res) => {
    const { user, token } = res.data;
    storage.setItem("@MicroBitStoredUser", JSON.stringify(user));
    storage.setItem(TOKEN_KEY, token);
    window.location.reload();
  });
};

export const getUser = () => {
  const user = storage.getItem("@MicroBitStoredUser");
  if (user) {
    return JSON.parse(user);
  } else {
    return undefined;
  }
};

export const logout = () => {
  storage.removeItem("@MicroBitStoredUser");
  storage.removeItem(TOKEN_KEY);
  window.location.reload();
};
