import { AMapFnActions } from './AMapFn.actions'
import { AMapFnState } from './AMapFn.state'

export function AMapFnReducer(state: AMapFnState, action: AMapFnActions): AMapFnState {
  switch (action.type) {
    case 'SET_AMAPFN':
      return { ...state, AMapFn: action.AMapFn }
  }
}