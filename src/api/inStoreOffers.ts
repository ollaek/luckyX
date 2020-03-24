import backEndBase from "./backEndBase";

import { OffersRequestModel, OffersFilterRequestModel } from "../types";

const inStoreOffersApi = {
  get: (req: OffersRequestModel) =>
    backEndBase
      .get(
        `offer/affiliate-get-offers?pageSize=${req.pageSize}&pageindex=${req.pageIndex}`
      )
      .then(res => res.data),
  getById: (id: any) =>
    backEndBase
      .get(`offer/affiliate-get-offers-Details?offerId=${id}`)
      .then(res => res.data),
  getFiltered: (req: OffersFilterRequestModel) =>
    backEndBase
      .post(
        `offer/affiliate-filter-offers?pageSize=${req.pageSize}&pageIndex=${req.pageIndex}`,
        {
          RegionIds: req.RegionIds,
          CategoryIds: req.CategoryIds
        }
      )
      .then(res => res.data),
  getByMerchantId: (id: any) =>
    backEndBase
      .get(`offer/affiliate-get-offers-by-merchant-id?merchantId=${id}`)
      .then(res => res.data)
};

export { inStoreOffersApi };
