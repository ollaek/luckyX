import actionCreatorFactory from 'typescript-fsa';

import { authApi } from '../api/auth';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';
import { SocialUserModel } from '../types'

const actionCreator = actionCreatorFactory();

const extrnalSignInAction = actionCreator.async<SocialUserModel, string[], any>(actionIds.AUTH_EXTERNAL_SIGNIN);


const extrnalSignInAsync = asyncAction(
    extrnalSignInAction,
    authApi.extrnalSignIn
);

export {
    extrnalSignInAction,
    extrnalSignInAsync,
};