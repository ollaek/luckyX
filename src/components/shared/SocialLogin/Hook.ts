import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../../..";
import { extrnalSignInAsync } from "../../../actions";
import { TUserState, SocialUserModel } from "../../../types";

const useUserState = () => {
    const state = useSelector<TGlobalState, TUserState>(({ userModule }) => userModule);
    const dispatch = useDispatch();
    console.log(state);
    return {
        ...state,
        externalSignIn: (user:SocialUserModel) => extrnalSignInAsync(dispatch,user)
    };
};

export {
    useUserState
};