import actionCreatorFactory from 'typescript-fsa';

import { onlineCashbacksApi } from '../api/onlineCashbacks';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const getStoreDetailsAction = actionCreator.async<any, string[], any>(actionIds.ONLINE_CASHBACKS_GET_STORE_DETAILS);

const getStoresByCategoryIdAction = actionCreator.async<any, string[], any>(actionIds.ONLINE_CASHBACKS_GET_STORES_BY_CATEGORY_ID);

const getAllCategoryAction = actionCreator.async<any, string[], any>(actionIds.ONLINE_CASHBACKS_GET_ALL_CATEGORIES);


const getStoreDetailsAsync = asyncAction(
    getStoreDetailsAction,
    onlineCashbacksApi.getStoreDetails
);

const getStoresByCategoryIdAsync = asyncAction(
    getStoresByCategoryIdAction,
    onlineCashbacksApi.getStoresByCategoryId
);

const getAllCategoryAsync = asyncAction(
    getAllCategoryAction,
    onlineCashbacksApi.getAllCategories
);

export {
    getStoreDetailsAction,
    getStoreDetailsAsync,
    getStoresByCategoryIdAction,
    getStoresByCategoryIdAsync,
    getAllCategoryAction,
    getAllCategoryAsync
}
