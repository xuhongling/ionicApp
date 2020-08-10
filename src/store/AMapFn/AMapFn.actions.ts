import { ActionType } from 'utils/typesafe-types'

export const setAMapFn = (AMapFn:any) => ({
  type: 'SET_AMAPFN',
  AMapFn
} as const)

export type AMapFnActions =
  | ActionType<typeof setAMapFn>
