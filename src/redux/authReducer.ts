import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "./redux-enum";

export interface LoginResponseType {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  not_before_policy: string;
  session_state: string;
  scope: string;
}

export interface AuthInitialState {
  isLoading: boolean;
  roleAssignLoading: boolean;
  loginResponse: LoginResponseType | null;
  loginErrorMessage: string | null;
  authToken: string | null;
  isLogout: boolean;
  fetchedUser: any;
  createdUser: any;
  fetchUserError: any;
  createUserErrorMessage: any;
  createUserSuccess: boolean;
  isEmailSent: boolean;
  sendNewUSerEmailErrorMessage: string | null;
  isAdminProfileLogoutClicked: boolean;
  isNewUserPasswordSuccess: boolean;
  sendNewUSerFailErrorMessage: string | null;
  sessions: any;
  profilePicUrl: string;
  logOutAllSessions: boolean;
}

export const initialState: AuthInitialState = {
  isLoading: false,
  roleAssignLoading: false,
  loginResponse: null,
  loginErrorMessage: null,
  authToken: null,
  isLogout: false,
  fetchedUser: null,
  createdUser: null,
  fetchUserError: null,
  createUserErrorMessage: null,
  createUserSuccess: false,
  isEmailSent: false,
  sendNewUSerEmailErrorMessage: null,
  isNewUserPasswordSuccess: false,
  sendNewUSerFailErrorMessage: null,
  sessions: null,
  profilePicUrl: null,
  logOutAllSessions: null,
  isAdminProfileLogoutClicked: false,
};

const authReducer = (state = initialState, action: any): AuthInitialState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoading: true, loginErrorMessage: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginResponse: action.payload,
        isLogout: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        loginErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
