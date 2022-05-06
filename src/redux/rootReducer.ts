import authReducer, { AuthInitialState } from "./authReducer";
import { LOGOUT } from "./redux-enum";
import { combineReducers } from 'redux';

export interface RootState {
  auth: AuthInitialState;
}

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
