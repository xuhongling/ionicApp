import { ActionType } from 'utils/typesafe-types'

export const setGlobalMap = (globalMap:any) => ({
  type: 'SET_GLOBALMAP',
  globalMap
} as const)

export type GlobalMapActions =
  | ActionType<typeof setGlobalMap>
