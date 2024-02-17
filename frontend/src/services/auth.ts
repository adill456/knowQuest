import { LoginData, RegisterData } from "@/Interfaces/auth";
import axios from "axios";

const API_URL = "localhost:5000/api/auth/login";

export const login = async (formData: LoginData) => {
  return axios
    .post(API_URL, formData)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const register = async (formData: RegisterData) => {
  axios
    .post(API_URL, formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
