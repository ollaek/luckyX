import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../..";
import {
  getAllOffersAsync,
  getAllCitiesAndCategoriesAsync,
  getMoreOffersAsync,
  getOfferByIdAsync,
  getFilteredOffersAsync,
  getMoreFilteredOffersAsync,
  getOffersByMerchantIdAsync
} from "../../actions";
import {
  TInStoreOffersState,
  OffersRequestModel,
  OffersFilterRequestModel
} from "../../types";

const useInStoreOffersState = () => {
  const state = useSelector<TGlobalState, TInStoreOffersState>(
    ({ inStoreOffersModule }) => inStoreOffersModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    getOffers: (req: OffersRequestModel) => getAllOffersAsync(dispatch, req),
    getMoreOffers: (req: OffersRequestModel) =>
      getMoreOffersAsync(dispatch, req),
    getFilterationData: () => getAllCitiesAndCategoriesAsync(dispatch),
    getOfferById: (id: any) => getOfferByIdAsync(dispatch, id),
    getFilteredOffers: (req: OffersFilterRequestModel) =>
      getFilteredOffersAsync(dispatch, req),
    getMoreFilteredOffers: (req: OffersFilterRequestModel) =>
      getMoreFilteredOffersAsync(dispatch, req),
    getOffersByMerchantId: (id: any) => getOffersByMerchantIdAsync(dispatch, id)
  };
};

export { useInStoreOffersState };
