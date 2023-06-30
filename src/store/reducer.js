import { SET_LOGIN_DATA, SET_SEARCH_BOARDGAMES, SET_SEARCH_USERS } from './constants';

const initState = {
    loginData: '',
    loggedIn: false,
    searchBoardgames: '',
    searchUsers: '',
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
        case SET_SEARCH_USERS:
            return {
                ...state,
                searchUsers: action.payload,
            };

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
