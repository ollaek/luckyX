import { AnyAction, isType } from "typescript-fsa";

import {
  getAllOffersAction,
  getAllCitiesAndCategoriesAction,
  getMoreOffersAction,
  getOfferByIdAction,
  getMoreFilteredOffersAction,
  getFilteredOffersAction,
  getOffersByMerchantIdAction
} from "../actions";
import {
  InStoreOfferModel,
  TInStoreOffersState,
  ResponseModel,
  City,
  Category,
  OffersModelWithTotalCount,
  InStoreOfferDetailsModel,
  CitiesAndCategories
} from "../types";

const initialState: TInStoreOffersState = {
  isLoading: false,
  Offers: new Array<InStoreOfferModel>(),
  Offer: undefined,
  TotalCount: 0,
  Cities: new Array<City>(),
  Categories: new Array<Category>(),
  RelatedOffers: new Array<InStoreOfferModel>()
};

const inStoreOffersReducer = (
  state: TInStoreOffersState = initialState,
  action: AnyAction
): TInStoreOffersState => {
  if (isType(action, getAllOffersAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getAllOffersAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
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
    };
  }

  if (isType(action, getMoreOffersAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
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

  if (isType(action, getAllCitiesAndCategoriesAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getAllCitiesAndCategoriesAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as CitiesAndCategories;
    return {
      ...state,
      Cities: responseData.Cities,
      Categories: responseData.Categories,
      isLoading: false
    };
  }

  if (isType(action, getAllCitiesAndCategoriesAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, getOfferByIdAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getOfferByIdAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as InStoreOfferDetailsModel;
    return {
      ...state,
      Offer: responseData,
      isLoading: false
    };
  }

  if (isType(action, getOfferByIdAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, getFilteredOffersAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getFilteredOffersAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as OffersModelWithTotalCount;
    return {
      ...state,
      Offers: responseData.AffiliateOffersList,
      TotalCount: responseData.TotalCount,
      isLoading: false
    };
  }

  if (isType(action, getFilteredOffersAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, getMoreFilteredOffersAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getMoreFilteredOffersAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as OffersModelWithTotalCount;
    return {
      ...state,
      Offers: [...state.Offers, ...responseData.AffiliateOffersList],
      TotalCount: responseData.TotalCount,
      isLoading: false
    };
  }

  if (isType(action, getMoreFilteredOffersAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, getOffersByMerchantIdAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getOffersByMerchantIdAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as OffersModelWithTotalCount;
    return {
      ...state,
      RelatedOffers: responseData.AffiliateOffersList,
      isLoading: false
    };
  }

  if (isType(action, getOffersByMerchantIdAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  return state;
};

export { inStoreOffersReducer };
