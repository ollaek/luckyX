import actionCreatorFactory from 'typescript-fsa';

import { inStoreOffersApi } from '../api/inStoreOffers';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const getAllOffersAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_OFFERS);

const getMoreOffersAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_MORE_OFFERS);

const getAllOffersAsync = asyncAction(
    getAllOffersAction,
    inStoreOffersApi.get
);

const getMoreOffersAsync = asyncAction(
    getMoreOffersAction,
    inStoreOffersApi.get
);

export {
    getAllOffersAction,
    getAllOffersAsync,
    getMoreOffersAction,
    getMoreOffersAsync
}