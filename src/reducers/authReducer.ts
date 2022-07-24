import * as actions from '../actionTypes/authActionTypes';

export interface AuthStateType {
  userData: {email: string; userName: string; password: string} | null;
}

const initialState = {
  userData: null,
} as AuthStateType;

export const authReducer = (state = initialState, action: actions.AuthActionTypes) => {
  switch (action.type) {
    case actions.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload.loginData,
      };
    default:
      return state;
  }
};
