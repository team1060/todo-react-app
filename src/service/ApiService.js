import axios from "axios";
import { API_BASE_URL } from "../api-config";

export async function call(api, method, request) {

  const url = API_BASE_URL + api;

  let axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: API_BASE_URL,
  });

  try {
    const response = await axiosInstance.request({
      url: url,
      method: method,
      data: request,
    }) ;
  
    return response.data;
  } catch (error) {
    console.error("Error in API call:", error);
    throw error; // 에러를 다시 throw하여 상위 호출자에게 전달
  }
}
