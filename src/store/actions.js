import { SET_LOGIN_DATA, SET_SEARCH_BOARDGAMES, SET_SEARCH_USERS } from './constants';

export const setLoginData = (payload) => ({
    type: SET_LOGIN_DATA,
    payload,
});

export const setSearchBoardgames = (payload) => ({
    type: SET_SEARCH_BOARDGAMES,
    payload,
});

export const setSearchUsers = (payload) => ({
    type: SET_SEARCH_USERS,
    payload,
});
