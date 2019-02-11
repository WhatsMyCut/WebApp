import ActionTypes from '../../Actions/ActionTypes'

// this method describes the overall state tree
// shape of the application
const getInitialState = () => {
  return {
    auth: { isLoggedIn: false },
    sidebar: { isExpanded: false },
    currentUser: null,
    currentUserPermissionsHash: {},
    notifications: {}
  }
}

const setInitialAppData = (state, action) => {
  let s1 = setCurrentUser(state, action)
  let s2 = setCurrentUserPermissions(s1, action)
  return Object.assign({}, s2, { auth: { isLoggedIn: true } })
}

const setCurrentUser = (state, action) => {
  let currentUser = action.currentUser
  return Object.assign({}, state, { currentUser })
}

const setCurrentUserPermissions = (state, action) => {
  let currentUserPermissionsHash = {}
  if (Array.isArray(action.currentUserPermissions)) {
    action.currentUserPermissions.forEach(p => currentUserPermissionsHash[p] = true)
  }
  return Object.assign({}, state, { currentUserPermissionsHash })
}


// state should not be mutated, this will prevent redux
// from understanding the change because it relies on
// simple referential equality checks to determine if
// state has changed if state is changed a new object
// should be returned
// as this becomes more complicated reducers should be split apart
// * http://redux.js.org/docs/basics/Reducers.html#splitting-reducers
export const rootReducer = (state = getInitialState(), action) => {
  switch (action.type) {
  case ActionTypes.INITIAL_APP_DATA:
    return setInitialAppData(state, action)
  default:
    return state
  }
}
