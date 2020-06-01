import { AuthorActions } from './author.actions'
import { AuthorState } from './author.state'

export function authorReducer(state: AuthorState, action: AuthorActions): AuthorState {
  switch (action.type) {
    case 'SET_USERLOGIN':
      return { ...state, isAuth: action.isAuth }
  }
}