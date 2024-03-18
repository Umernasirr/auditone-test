import KYC from "../api/utils/kyc/kyc.ts";

const useKYC = () => {
  const getKycStatusOfSpace = async (id: string) => {
    try {
      const data = await KYC().getKycStatusOfSpace(id);

      return data;
    } catch (e) {
      console.log(e.message);
    }
  };
  const getKycStatusOfToken = async (id: string) => {
    try {
      const data = await KYC().getKycStatusOfToken(id);

      return data;
    } catch (e) {
      console.log(e.message);
    }
  };
  const getKycStatusOfCollection = async (id: string) => {
    try {
      const data = await KYC().getKycStatusOfCollection(id);

      return data;
    } catch (e) {
      console.log(e.message);
    }
  };
  const getKycStatusOfMember = async (id: string) => {
    try {
      const data = await KYC().getKycStatusOfMember(id);

      return data;
    } catch (e) {
      console.log(e.message);
    }
  };

  return {
    getKycStatusOfToken,
    getKycStatusOfCollection,
    getKycStatusOfMember,
    getKycStatusOfSpace,
  };
};

export default useKYC;
