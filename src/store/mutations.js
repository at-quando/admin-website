import * as types from './types'

export default {
  [types.MUTATE_SET_USER]: (state, payload) => {
    state.user = payload
  }
}
