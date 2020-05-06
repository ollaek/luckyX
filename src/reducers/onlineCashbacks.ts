import { AnyAction, isType } from 'typescript-fsa';

import { getStoreDetailsAction, getStoresByCategoryIdAction, getAllCategoryAction, getTopStoresAction, getMoreStoresAction, getMoreStoresByCategoryIdAction } from '../actions';
import {
  ResponseModel,
  StoreDetailsModel,
  CategoriesModel,
  StoresModelWithTotalCount,
  TOnlineCashbacksState,
  TopStoresModel
} from '../types';

const initialState: TOnlineCashbacksState = {
    isLoading: false,
    storeDetails: undefined,
    stores: new Array<TopStoresModel>(),
    totalCount: 0,
    catrgories: new Array<CategoriesModel>()
};


const onlineCashbacksReducer = (state: TOnlineCashbacksState = initialState, action: AnyAction): TOnlineCashbacksState => {
    if (isType(action, getStoreDetailsAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getStoreDetailsAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as StoreDetailsModel;
        return {
            ...state,
            storeDetails: responseData,
            isLoading: false
        };
    }

    if (isType(action, getStoreDetailsAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, getTopStoresAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getTopStoresAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as StoresModelWithTotalCount;
        return {
            ...state,
            stores: responseData.AffiliateMerchantsList,
            totalCount: responseData.TotalCount,
            isLoading: false
        };
    }

    if (isType(action, getTopStoresAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, getStoresByCategoryIdAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getStoresByCategoryIdAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as StoresModelWithTotalCount;
        return {
            ...state,
            stores: responseData.AffiliateMerchantsList,
            totalCount: responseData.TotalCount,
            isLoading: false
        };
    }

    if (isType(action, getStoresByCategoryIdAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, getAllCategoryAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getAllCategoryAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as Array<CategoriesModel>;
        return {
            ...state,
            catrgories: responseData,
            isLoading: false
        };
    }

    if (isType(action, getStoresByCategoryIdAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, getMoreStoresAction.started)) {
        return {
            ...state,
            isLoading: false
        }
    }

    if (isType(action, getMoreStoresAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as StoresModelWithTotalCount;
        
        return {
            ...state,
            stores: [...state.stores, ...responseData.AffiliateMerchantsList],
            totalCount: responseData.TotalCount,
            isLoading: false
        };
    }

    if (isType(action, getMoreStoresAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, getMoreStoresByCategoryIdAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getMoreStoresByCategoryIdAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as StoresModelWithTotalCount;
        return {
            ...state,
            stores: [...state.stores, ...responseData.AffiliateMerchantsList],
            totalCount: responseData.TotalCount,
            isLoading: false
        };
    }

    if (isType(action, getMoreStoresByCategoryIdAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    return state;
};

export {
    onlineCashbacksReducer
};