import { combineReducers } from './combineReducers'
import { authorReducer } from './author/author.reducer'
import { globalMapReducer } from './globalMap/globalMap.reducer'
import { userReducer } from './user/user.reducer'

export const initialState: AppState = {
	author: {
		isAuth: false
	},
	globalMap: {
		globalMap: null
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
  user: userReducer
});

export type AppState = ReturnType<typeof reducers>