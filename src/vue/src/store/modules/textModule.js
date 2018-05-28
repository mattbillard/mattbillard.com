import axios from 'axios'

import { apiUrls } from '../../../../config'

const state = {
  aboutText: null,
  connectText: null,
  homeText: null,
  skillsText: null,
}

const actions = {
  getAboutText () {
    return axios.get(apiUrls.about)
      .then(response => { state.aboutText = response.data })
      .catch(error => console.error(error))
  },
  getConnectText () {
    return axios.get(apiUrls.connect)
      .then(response => { state.connectText = response.data })
      .catch(error => console.error(error))
  },
  getHomeText () {
    return axios.get(apiUrls.home)
      .then(response => { state.homeText = response.data })
      .catch(error => console.error(error))
  },
  getSkillsText () {
    return axios.get(apiUrls.skills)
      .then(response => { state.skillsText = response.data })
      .catch(error => console.error(error))
  }
}

export default {
  state,
  actions
}
