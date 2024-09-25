import axios from "axios";
import { useAuth } from "/src/store/auth";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;
window.axios.defaults.baseURL = 'https://apiforest.hksofttronix.com:4430/api/';
window.axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 300) {
      const auth = useAuth();
      auth.destroyTokenAndSessionAndRedirectTo();
    }
    return Promise.reject(error);
  }
);

if (localStorage.getItem("access_token")) {
  window.axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}
