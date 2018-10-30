import * as types from './types'

export default {
  [types.SET_USER]: ({commit}, payload) => {
    commit(types.MUTATE_SET_USER, payload)
  }
}