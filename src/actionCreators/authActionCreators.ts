import {AxiosError} from 'axios';
import * as actions from '../actionTypes/authActionTypes';
import {loginDataType} from '../types/loginTypes';

export function loginRequest() {
  return {
    type: actions.LOGIN_REQUEST,
  };
}

export function loginSuccess(): actions.LoginSuccessAction {
  return {
    type: actions.LOGIN_SUCCESS,
  };
}

export function loginFailure(error: AxiosError): actions.LoginFailureAction {
  return {
    type: actions.LOGIN_FAILURE,
    payload: {error},
  };
}

export function getUserDataRequest(): actions.GetUserDataRequestAction {
  return {
    type: actions.GET_USER_DATA_REQUEST,
  };
}

export function getUserDataSuccess(loginData: loginDataType): actions.GetUserDataSuccessAction {
  return {
    type: actions.GET_USER_DATA_SUCCESS,
    payload: {loginData},
  };
}

export function getUserDataFailure(error: Error | string): actions.GetUserDataFailureAction {
  return {
    type: actions.GET_USER_DATA_FAILURE,
    payload: {error},
  };
}
