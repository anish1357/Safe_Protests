

import { CHANGE_LOADING_DESC, CHANGE_LOADING_UPD, CHANGE_LOADING_SP } from '../Actions/Types';

const initialState = {
    descLoading: true,
    updateLoading: true,
    singleProtestLoading: true,
};

const loading = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOADING_SP:
            return {
                ...state,
                singleProtestLoading: false,
            };
        case CHANGE_LOADING_UPD:
            return {
                ...state,
                updateLoading: action.payload.up,
                singleProtestLoading: action.payload.sp

            };
        case CHANGE_LOADING_DESC:
            return {
                ...state,
                descLoading: action.payload.desc,
                singleProtestLoading: action.payload.sp,
            };
        default: return state;
    }
};
export default loading;