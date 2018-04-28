import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_USER_INFO } from "./types";

const SCOPE =
  "scope=basic+public_content+follower_list+comments+relationships+likes";
const BASE_API_URL = `https://api.instagram.com/v1`;
const USERS_SELF_API = `${BASE_API_URL}/users/self`;

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchUserInfo = token => async dispatch => {
  // console.log(token);
  const res = await axios.get(`${USERS_SELF_API}?access_token=${token}`);
  dispatch({
    type: FETCH_USER_INFO,
    payload: res
  });
};
