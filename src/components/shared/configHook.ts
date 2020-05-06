import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../..";
import { getConfigAsync } from "../../actions";
import { TConfigState } from "../../types";

const useConfigState = () => {
    const state = useSelector<TGlobalState, TConfigState>(({ configModule }) => configModule);
    const dispatch = useDispatch();
    return {
        ...state,
        getConfig: () => getConfigAsync(dispatch),
    };
};

export {
    useConfigState
};