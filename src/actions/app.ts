import actionCreatorFactory from 'typescript-fsa';

import { appApi } from '../api/app';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const getTopStoresAction = actionCreator.async<undefined, string[], any>(actionIds.APP_GET_TOP_STORES);

const getTopCategoriesAction = actionCreator.async<undefined, string[], any>(actionIds.APP_GET_TOP_CATEGORIES);


const getTopStoresAsync = asyncAction(
    getTopStoresAction,
    appApi.getStores
);

const getTopCategoriesAsync = asyncAction(
    getTopCategoriesAction,
    appApi.getCategories
);

export {
    getTopStoresAction,
    getTopStoresAsync,
    getTopCategoriesAction,
    getTopCategoriesAsync
};