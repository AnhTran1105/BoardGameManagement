import { SET_LOGIN_DATA, SET_SEARCH_BOARDGAMES } from './constants';

export const setLoginData = (payload) => ({
    type: SET_LOGIN_DATA,
    payload,
});

export const setSearchBoardgames = (payload) => ({
    type: SET_SEARCH_BOARDGAMES,
    payload,
});
