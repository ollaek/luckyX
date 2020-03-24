import actionCreatorFactory from 'typescript-fsa';

import { citiesAndCategoriesApi } from '../api/citiesAndCategories';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const getAllCitiesAndCategoriesAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_ALL_AREAS);

const getAllCitiesAndCategoriesAsync = asyncAction(
    getAllCitiesAndCategoriesAction,
    citiesAndCategoriesApi.get
);

export {
    getAllCitiesAndCategoriesAction,
    getAllCitiesAndCategoriesAsync
}