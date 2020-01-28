import { AnyAction, isType } from "typescript-fsa";

import { extrnalSignInAction } from "../actions";
import { TUserState, UserModel } from "../types";

const initialState: TUserState = {
    User : {} as UserModel,
    isFetching : false
};


const authReducer = (state: TUserState = initialState, action: AnyAction): TUserState => {
    
    

    if (isType(action, extrnalSignInAction.started)){
        return {
            ...state,
            isFetching: true
        }
    }

    if (isType(action, extrnalSignInAction.done)) {
        return {
            ...state,
            User: action.payload.result as unknown as UserModel,
            isFetching: false       
        };
    }

    if (isType(action, extrnalSignInAction.failed)) {
        
        // Do error handling work if needed
        return {
            ...state,
            isFetching: false
        };
    }

    return state;
};

export {
    authReducer
};