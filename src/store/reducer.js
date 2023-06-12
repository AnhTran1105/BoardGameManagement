import { SET_LOGIN_DATA } from './constants';

const initState = {
    loginData: '',
};

function reducer(state, action) {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                loginData: action.payload,
            };

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
