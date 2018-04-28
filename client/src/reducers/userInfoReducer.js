import { FETCH_USER_INFO } from "../actions/types";

export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER_INFO:
      return { ...state, userInfo: action.payload.data.data };
    default:
      return state;
  }
}
