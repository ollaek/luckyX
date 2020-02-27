import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../..";
import {
  getAllOffersAsync,
  getAllAreasAsync,
  getMoreOffersAsync
} from "../../actions";
import { TInStoreOffersState, OffersRequestModel } from "../../types";

const useOnlineCashbacksState = () => {
  const state = useSelector<TGlobalState, TInStoreOffersState>(
    ({ inStoreOffersModule }) => inStoreOffersModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    getOffers: (req: OffersRequestModel) => getAllOffersAsync(dispatch, req),
    getMoreOffers: (req: OffersRequestModel) =>
      getMoreOffersAsync(dispatch, req),
    getAreas: () => getAllAreasAsync(dispatch)
  };
};

export { useOnlineCashbacksState };
