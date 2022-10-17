import axios from "axios";

const BASE_URL = "https://project16shortly.herokuapp.com";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("shortly"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  return config;
}

function signUp(body) {
  const signUpAPI = `${BASE_URL}/signup`;
  return axios.post(signUpAPI, body);
}

function signIn(body) {
  const signInAPI = `${BASE_URL}/signin`;
  return axios.post(signInAPI, body);
}

function shortenUrl(body) {
  const config = createHeaders();
  const shortenUrlAPI = `${BASE_URL}/urls/shorten`;
  return axios.post(shortenUrlAPI, body, config);
}

function getUrl(id) {
  const getUrlAPI = `${BASE_URL}/urls/${id}`;
  return axios.get(getUrlAPI);
}

function openUrl(shortUrl) {
  const openUrlAPI = `${BASE_URL}/urls/open/${shortUrl}`;
  return axios.get(openUrlAPI);
}

function deleteUrl(id) {
  const config = createHeaders();
  const deleteUrlAPI = `${BASE_URL}/urls/${id}`;
  return axios.delete(deleteUrlAPI, config);
}

function getUserInfo() {
  const config = createHeaders();
  const getUserInfoAPI = `${BASE_URL}/users/me`;
  return axios.get(getUserInfoAPI, config);
}

function getRanking() {
  const getRankingAPI = `${BASE_URL}/ranking`;
  return axios.get(getRankingAPI);
}

export {
  signUp,
  signIn,
  shortenUrl,
  getUrl,
  openUrl,
  deleteUrl,
  getUserInfo,
  getRanking,
};
