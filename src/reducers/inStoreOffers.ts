import { AnyAction, isType } from "typescript-fsa";

import { getAllOffersAction, getAllAreasAction, getMoreOffersAction } from "../actions";
import { InStoreOfferModel, TInStoreOffersState, ResponseModel, AreaModel, OffersModelWithTotalCount } from "../types";

const initialState: TInStoreOffersState = {
  isLoading: false,
  Offers: new Array<InStoreOfferModel>(),
  TotalCount: 0,
  Areas: new Array<AreaModel>()
};

const inStoreOffersReducer = (state: TInStoreOffersState = initialState, action: AnyAction): TInStoreOffersState => {

    if (isType(action, getAllOffersAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getAllOffersAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as OffersModelWithTotalCount;
        return {
            ...state,
            Offers: responseData.AffiliateOffersList,
            TotalCount: responseData.TotalCount,
            isLoading: false
        };
    }

    if (isType(action, getAllOffersAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, getMoreOffersAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getMoreOffersAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as OffersModelWithTotalCount;
        return {
            ...state,
            Offers: [...state.Offers, ...responseData.AffiliateOffersList],
            TotalCount: responseData.TotalCount,
            isLoading: false
        };
    }

    if (isType(action, getMoreOffersAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, getAllAreasAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getAllAreasAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as AreaModel[];
        return {
            ...state,
            Areas: responseData,
            isLoading: false
        };
    }

    if (isType(action, getAllAreasAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }
    return state;
}

export {
    inStoreOffersReducer
};