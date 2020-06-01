import { ActionType } from 'utils/typesafe-types'

export const setUserLogin = (isAuth: boolean) => ({
  type: 'SET_USERLOGIN',
  isAuth
} as const)


export type AuthorActions =
  | ActionType<typeof setUserLogin>