import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../..";
import { getStoreDetailsAsync, getTopStoresAsync, getAllCategoryAsync, getStoresByCategoryIdAsync} from "../../actions";
import { TOnlineCashbacksState, TopStoresRequestModel } from "../../types";

const useOnlineCashbacksState = () => {
    const state = useSelector<TGlobalState, TOnlineCashbacksState>(({ onlineCashbacksModule }) => onlineCashbacksModule);
    const dispatch = useDispatch();
    return {
        ...state,
        getStoreDetails: (id:any) => getStoreDetailsAsync(dispatch,id),
        getStores: (req:TopStoresRequestModel) => getTopStoresAsync(dispatch,req),
        getStoresByCategoryid: (id:any) => getStoresByCategoryIdAsync(dispatch,id),
        getCategories: () => getAllCategoryAsync(dispatch)
    };
};

export {
    useOnlineCashbacksState
};