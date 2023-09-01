import axious from "axios";

// base url of coingecko.com
export const baseApi = axious.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});
