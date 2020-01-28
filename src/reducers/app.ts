import { AnyAction, isType } from "typescript-fsa";

import { getTopStoresAction, getTopCategoriesAction } from "../actions";
import { TAppState,TopStoresModel ,TopCategoriesModel } from "../types";

const initialState: TAppState = {
    isLoading: false,
    topStores: new Array<TopStoresModel>(),
    topCategories : new Array<TopCategoriesModel>()
};


const appReducer = (state: TAppState = initialState, action: AnyAction): TAppState => {
    
    

    if (isType(action, getTopStoresAction.started)){
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getTopStoresAction.done)) {
        return {
            ...state,
            topStores: action.payload.result as unknown as Array<TopStoresModel>,
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

    if (isType(action, getTopCategoriesAction.started)){
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, getTopCategoriesAction.done)) {
        return {
            ...state,
            topCategories: action.payload.result as unknown as Array<TopCategoriesModel>,
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