import { SET_LOGIN_DATA, SET_SEARCH_BOARDGAMES } from './constants';

const initState = {
    loginData: '',
    searchBoardgames: '',
};

function reducer(state, action) {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                loginData: action.payload,
            };
        case SET_SEARCH_BOARDGAMES:
            return {
                ...state,
                searchBoardgames: action.payload,
            };

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
