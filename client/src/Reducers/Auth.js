import { CHANGE_LOGIN_STATUS, CHANGE_PRESENT_STATUS } from '../Actions/Types';

const initialState = {
    isAuth: localStorage.getItem('isAuth') || false,
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    userName: localStorage.getItem('userName') || '',
    present: localStorage.getItem('present') || false,
    protestId: localStorage.getItem('protestId') || null,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATUS:
            return {
                ...state,
                isAuth: action.payload.isAuth,
                token: action.payload.token,
                userId: action.payload.userId,
                userName: action.payload.userName
            };
        case CHANGE_PRESENT_STATUS:
            return {
                ...state,
                present: action.payload.present,
                protestId: action.payload.protestId,
            };
        default: return state;
    }
};

export default auth;