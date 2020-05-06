import { useDispatch, useSelector } from "react-redux"

import { TGlobalState } from "../..";
import { getSubjectsAsync } from "../../actions";
import { TContactUsState } from "../../types";

const useContactUsState = () => {
    const state = useSelector<TGlobalState, TContactUsState>(({ contactUsModule }) => contactUsModule);
    const dispatch = useDispatch();
    return {
        ...state,
        getSubjects: () => getSubjectsAsync(dispatch),
    };
};

export {
    useContactUsState
};