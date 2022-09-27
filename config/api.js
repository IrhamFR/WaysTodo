import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.kontenbase.com/query/api/v1/38e15c87-5d11-4dd7-b913-45e78b92cce2/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer $(token)`;
  } else {
    delete API.defaults.headers.common[Authorization];
  }
};