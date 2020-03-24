import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../..";
import { getTopStoresAsync, getTopCategoriesAsync } from "../../actions";
import { TAppState, TopStoresRequestModel } from "../../types";

const useAppState = () => {
    const state = useSelector<TGlobalState, TAppState>(({ appModule }) => appModule);
    const dispatch = useDispatch();
    return {
        ...state,
        getTopStores: (req:TopStoresRequestModel) => getTopStoresAsync(dispatch,req),
        getTopCategories: () => getTopCategoriesAsync(dispatch)
    };
};

export {
    useAppState
};