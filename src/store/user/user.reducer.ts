import { UserActions } from './user.actions'
import { UserState } from './user.state'

export function userReducer(state: UserState, action: UserActions): UserState {
  switch (action.type) {
    case 'SET_USERLOADING':
      return { ...state, loading: action.isLoading }
    case 'SET_USERDATA':
      return { ...state, ...action.data }
    case 'SET_USERNAME':
      return { ...state, username: action.username }
  }
}