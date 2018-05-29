export const GET_USER_LIST_REQUEST = "GET_USER_LIST_REQUEST";
export const GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS";
export const GET_USER_LIST_FAILURE = "GET_USER_LIST_FAILURE";
import { SUCCESS, REQUESTING, ERROR } from "../lib/constants";
export function getUsersRequest() {
  return {
    type: GET_USER_LIST_REQUEST,
    status: REQUESTING
  };
}

export function getUsersSuccess(users) {
  return {
    type: GET_USER_LIST_SUCCESS,
    status: SUCCESS,
    users
  };
}
export function getUsersFailure(error) {
  return {
    type: GET_USER_LIST_FAILURE,
    status: ERROR,
    error
  };
}
export function getUsers() {
  return (dispatch, getState) => {
    dispatch(getUsersRequest());
    try {
      const users = [];
      dispatch(getUsersSuccess(users));
    } catch (e) {
      dispatch(getUsersFailure(e.message));
    }
  };
}
