import backEndBase from "./backEndBase";

import { OffersRequestModel } from "../types";


const inStoreOffersApi = {
  get: (req:OffersRequestModel) =>
    backEndBase
      .get(`offer/affiliate-get-offers?pageSize=${req.pageSize}&pageindex=${req.pageIndex}`)
      .then(res => {
        return res.data;
      }),
};

export { inStoreOffersApi };
