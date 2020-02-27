import backEndBase from "./backEndBase";

import { StoresByCategoryIdRequestModel } from "../types";

const onlineCashbacksApi = {
  getStoreDetails: (id: any) =>
    backEndBase
      .get(`merchant/get-affiliate-merchant-details?merchantId=${id}`)
      .then(res => {
        return res.data;
      }),
  getStoresByCategoryId: (req: StoresByCategoryIdRequestModel) =>
    backEndBase
      .get(
        `AffiliateCategory/get-affiliate-merchants-by-category?categoryId=${req.categoryId}&pageSize=${req.pageSize}&PageIndex=${req.pageIndex}`
      )
      .then(res => {
        return res.data;
      }),
  getAllCategories: () =>
    backEndBase
      .get(`AffiliateCategory/get-categories?pageSize=100&pageIndex=0`)
      .then(res => {
        return res.data;
      })
};

export { onlineCashbacksApi };
