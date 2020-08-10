import { combineReducers } from './combineReducers'
import { authorReducer } from './author/author.reducer'
import { globalMapReducer } from './globalMap/globalMap.reducer'
import { AMapFnReducer } from './AMapFn/AMapFn.reducer'
import { userReducer } from './user/user.reducer'

export const initialState: AppState = {
	author: {
		isAuth: false
	},
	globalMap: {
		globalMap: null
	},
	AMapFn: {
		AMapFn: null
	},
  user: {
    loading: false,
    data: null,
		username: 'xuhongling',
  }
};

export const reducers = combineReducers({
	author: authorReducer,
	globalMap: globalMapReducer,
	AMapFn: AMapFnReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof reducers>