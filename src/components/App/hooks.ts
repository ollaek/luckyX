import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../..";
import { getTopStoresAsync, getTopCategoriesAsync } from "../../actions";
import { TAppState } from "../../types";

const useAppState = () => {
    const state = useSelector<TGlobalState, TAppState>(({ appModule }) => appModule);
    const dispatch = useDispatch();
    console.log(state);
    return {
        ...state,
        getTopStores: () => getTopStoresAsync(dispatch),
        getTopCategories: () => getTopCategoriesAsync(dispatch)
    };
};

export {
    useAppState
};