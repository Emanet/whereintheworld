import axiosClient from "../axios";

const FetchAllCountry = async () => {
  const { data } = await axiosClient.get("/all");
  return data;
};

export default FetchAllCountry;
