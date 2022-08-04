const BASE_URL = "https://62b0787e196a9e987024484f.mockapi.io/Phone";

export let phoneService = {
  layDanhSachPhone: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
};
