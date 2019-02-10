import ActionTypes from './ActionTypes'
import _ from 'lodash'
const Actions = {
    fetchInitialAppData() {
        return dispatch => {
          let token = localStorage.getItem('token')
          if (token) {
              return dispatch({
                type: ActionTypes.INITIAL_APP_DATA
              })
          }
          return Promise.reject(new Error('No token available'))
        }
    }
}
export default _.bindAll(Actions, [])
