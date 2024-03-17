import axiosHelper, { API_METHOD } from "../axiosHelper.ts";
import { KycEndpoint, KycBase } from "./util.ts";

const KYC = () => {
  const getKycStatusOfSpace = async (id: string) => {
    const res = await axiosHelper(
      API_METHOD.GET,
      KycBase,
      `${KycEndpoint.getKycStatusOfSpace}?id=${id}`
    );

    if (!res?.data) {
      throw new Error("Error Occured - getKycStatusOfSpace");
    }

    return res.data;
  };

  const getKycStatusOfToken = async (id: string) => {
    const res = await axiosHelper(
      API_METHOD.GET,
      KycBase,
      `${KycEndpoint.getKycStatusOfToken}?id=${id}`
    );

    if (!res?.data) {
      throw new Error("Error Occured - getKycStatusOfToken");
    }

    return res.data;
  };

  const getKycStatusOfMember = async (id: string) => {
    const res = await axiosHelper(
      API_METHOD.GET,
      KycBase,
      `${KycEndpoint.getKycStatusOfMember}?id=${id}`
    );

    if (!res?.data) {
      throw new Error("Error Occured - getKycStatusOfMember");
    }

    return res.data;
  };

  const getKycStatusOfCollection = async (id: string) => {
    const res = await axiosHelper(
      API_METHOD.GET,
      KycBase,
      `${KycEndpoint.getKycStatusOfCollection}?id=${id}`
    );

    if (!res?.data) {
      throw new Error("Error Occured - getKycStatusOfCollection");
    }

    return res.data;
  };

  return {
    getKycStatusOfSpace,
    getKycStatusOfCollection,
    getKycStatusOfToken,
    getKycStatusOfMember,
  };
};

export default KYC;
