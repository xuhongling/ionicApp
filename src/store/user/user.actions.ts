import { ActionType } from 'utils/typesafe-types'
import { UserState } from './user.state'

export const setLoading = (isLoading: boolean) => ({
  type: 'SET_USERLOADING',
  isLoading
} as const)

export const setData = (data: Partial<UserState>) => ({
  type: 'SET_USERDATA',
  data
} as const)

export const setUsernameData = (username?: string) => ({
  type: 'SET_USERNAME',
  username
} as const)

export type UserActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof setUsernameData>
