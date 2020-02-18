import { AnyAction, isType } from 'typescript-fsa';

import { getTopCategoriesAction, getTopStoresAction } from '../actions';
import {
  ResponseModel,
  TAppState,
  TopCategoriesModel,
  StoresModelWithTotalCount
} from '../types';

const initialState: TAppState = {
    isLoading: false,
    topStores: {} as StoresModelWithTotalCount,
    topCategories: new Array<TopCategoriesModel>()
};

const appReducer = (state: TAppState = initialState, action: AnyAction): TAppState => {
    if (isType(action, getTopStoresAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getTopStoresAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as StoresModelWithTotalCount;
        console.log(responseData);
        return {
            ...state,
            topStores: responseData,
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

    if (isType(action, getTopCategoriesAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getTopCategoriesAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        const responseData = response.Data as Array<TopCategoriesModel>;
        return {
            ...state,
            topCategories: responseData,
            isLoading: false
        };
    }

    if (isType(action, getTopCategoriesAction.failed)) {
        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    return state;
};

export {
    appReducer
};