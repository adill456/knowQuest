import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";

import { LoginData, RegisterData } from "@/Interfaces/auth";

export const API_URL = "http://localhost:5000/api";

export const serviceLogin = async (formData: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, formData);
    if (response.data.accessToken && response.data.refreshToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const serviceRegister = async (formData: RegisterData) => {
  axios
    .post(`${API_URL}/auth/register`, formData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const serviceLogout = async () => {
  const refreshToken = JSON.parse(localStorage.getItem("user")).refreshToken;
  try {
    await axios.post(`${API_URL}/auth/logout`, { refreshToken });
    localStorage.removeItem("user");
  } catch (error) {
    throw error.response.data;
  }
};

export const serviceGetUser = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    //@ts-ignore
    const userId = (jwtDecode(accessToken) as JwtPayload).id;
    const response = await axios.get(`${API_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
