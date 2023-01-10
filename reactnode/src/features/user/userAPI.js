import axios from "axios";

export const axiosLink = async ({ link }) => {
  return new Promise(async (resolve, reject) => {
    const response = await axios({
      method: "get",
      url: link,
    });
    resolve({ data: response.data });
  });
};
