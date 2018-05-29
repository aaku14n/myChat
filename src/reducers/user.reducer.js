import { SUCCESS, ERROR, REQUESTING } from "../lib/constants";
import * as userActions from "../actions/user.action";
const users = (
  state = {
    users: [],
    status: null,
    loading: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case userActions.GET_USER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });
    case userActions.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        users: action.users
      });
      case userActions.GET_USERS_FAILURE:
      return Object.assign({},state,{
          status:action.status,
          loading:false,
          error:action.error
      })
      default :
      return state
  }
};

export default users