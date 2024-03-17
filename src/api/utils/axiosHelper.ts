import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";

export const BASE_URL = "https://api.auditone.io" as string;

export enum API_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

const axiosHelper = async (
  method: API_METHOD,
  entity: string,
  endpoint: string,
  data?: any,
  headers?: any
) => {
  let response: Promise<AxiosResponse<any, any>> | undefined = undefined;
  try {
    if (method === API_METHOD.GET) {
      response = axios.get(`${BASE_URL}/${endpoint}`, {
        headers: {
          ...headers,
        },
      });
    } else if (method === API_METHOD.POST) {
      response = axios.post(`${BASE_URL}/${endpoint}`, data, {
        headers: {
          ...headers,
        },
      });
    } else if (method === API_METHOD.PUT) {
      response = axios.put(`${BASE_URL}/${endpoint}`, data, {
        headers: {
          ...headers,
        },
      });
    } else if (method === API_METHOD.DELETE) {
      response = axios.delete(`${BASE_URL}/${endpoint}`, {
        headers: {
          ...headers,
        },
      });
    }

    if (response) return await Promise.resolve(response);
  } catch (e: any) {
    const errorMessage = e.response?.data?.message ?? "Error Occured";

    toast.error(errorMessage, {
      position: "top-right",
    });
  }
};

export default axiosHelper;
