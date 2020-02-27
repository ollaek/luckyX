import actionCreatorFactory from 'typescript-fsa';

import { areasApi } from '../api/areas';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const getAllAreasAction = actionCreator.async<any, string[], any>(actionIds.IN_STORE_OFFER_GET_ALL_AREAS);

const getAllAreasAsync = asyncAction(
    getAllAreasAction,
    areasApi.get
);

export {
    getAllAreasAction,
    getAllAreasAsync
}