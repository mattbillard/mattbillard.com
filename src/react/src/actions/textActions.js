import axios from 'axios'
import * as types from './actionTypes';

import { apiUrls } from '../config';

export function getAboutText() {
  return function(dispatch) {
    return axios.get(apiUrls.about)
      .then(response => dispatch({ type: types.GET_ABOUT_TEXT_SUCCESS, aboutText: response.data}))
      .catch(error => console.error(error));
  };
}

export function getConnectText() {
  return function(dispatch) {
    return axios.get(apiUrls.connect)
      .then(response => dispatch({ type: types.GET_CONNECT_TEXT_SUCCESS, connectText: response.data}))
      .catch(error => console.error(error));
  };
}

export function getHomeText() {
  return function(dispatch) {
    return axios.get(apiUrls.home)
      .then(response => dispatch({ type: types.GET_HOME_TEXT_SUCCESS, homeText: response.data}))
      .catch(error => console.error(error));
  };
}

export function getSkillsText() {
  return function(dispatch) {
    return axios.get(apiUrls.skills)
      .then(response => dispatch({ type: types.GET_SKILLS_TEXT_SUCCESS, skillsText: response.data}))
      .catch(error => console.error(error));
  };
}

