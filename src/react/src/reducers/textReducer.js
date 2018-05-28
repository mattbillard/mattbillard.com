import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function textReducer(state = initialState.textData, action) {
  switch (action.type) {
    case types.GET_ABOUT_TEXT_SUCCESS:
      return { aboutText: action.aboutText };

    case types.GET_CONNECT_TEXT_SUCCESS:
      return { connectText: action.connectText };

    case types.GET_HOME_TEXT_SUCCESS:
      return { homeText: action.homeText };

    case types.GET_SKILLS_TEXT_SUCCESS:
      return { skillsText: action.skillsText };

    default:
      return state;
  }
}
