import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_USER_INFO } from "./types";

export const AUTH = "AUTH";

const REDIRECT_URI = "http://localhost:8080";
const CLIENT_ID = "25a2ad5f5f454490bc7e3f0dfd215ee3";
const SCOPE =
  "scope=basic+public_content+follower_list+comments+relationships+likes";
const BASE_API_URL = `https://api.instagram.com`;
const AUTH_URL = `${BASE_API_URL}/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&${SCOPE}`;
const API_URL = `${BASE_API_URL}/v1`;
const USERS_SELF_API = `${API_URL}/users/self}`;

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchUserInfo = token => async dispatch => {
  console.log(token);
  const res = await axios.get(`${API_URL}/users/self${token}`);
  dispatch({
    type: FETCH_USER_INFO,
    payload: res
  });
};
