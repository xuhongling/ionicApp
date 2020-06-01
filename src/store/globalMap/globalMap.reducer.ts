import { GlobalMapActions } from './globalMap.actions'
import { GlobalMapState } from './globalMap.state'

export function globalMapReducer(state: GlobalMapState, action: GlobalMapActions): GlobalMapState {
  switch (action.type) {
    case 'SET_GLOBALMAP':
      return { ...state, globalMap: action.globalMap }
  }
}