import actionCreatorFactory from 'typescript-fsa';

import { inStoreOffersApi } from '../api/inStoreOffers';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const getAllOffersAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_OFFERS);

const getMoreOffersAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_MORE_OFFERS);

const getOfferByIdAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_OFFER_BY_ID);

const getFilteredOffersAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_FILTERED_OFFERS);

const getMoreFilteredOffersAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_MORE_FILTERED_OFFERS);

const getOffersByMerchantIdAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_OFFERS_BY_MERCHANT_ID);


const getAllOffersAsync = asyncAction(
    getAllOffersAction,
    inStoreOffersApi.get
);

const getMoreOffersAsync = asyncAction(
    getMoreOffersAction,
    inStoreOffersApi.get
);

const getOfferByIdAsync = asyncAction(
    getOfferByIdAction,
    inStoreOffersApi.getById
);

const getFilteredOffersAsync = asyncAction(
    getFilteredOffersAction,
    inStoreOffersApi.getFiltered
);

const getMoreFilteredOffersAsync = asyncAction(
    getMoreFilteredOffersAction,
    inStoreOffersApi.getFiltered
);

const getOffersByMerchantIdAsync = asyncAction(
    getOffersByMerchantIdAction,
    inStoreOffersApi.getByMerchantId
)

export {
    getAllOffersAction,
    getAllOffersAsync,
    getMoreOffersAction,
    getMoreOffersAsync,
    getOfferByIdAction,
    getOfferByIdAsync,
    getFilteredOffersAction,
    getFilteredOffersAsync,
    getMoreFilteredOffersAction,
    getMoreFilteredOffersAsync,
    getOffersByMerchantIdAction,
    getOffersByMerchantIdAsync
}