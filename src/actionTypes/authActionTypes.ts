import {AxiosError} from 'axios';
import {loginDataType} from '../types/loginTypes';

export const LOGIN_REQUEST = 'LoginActionTypes/LOGIN_REQUEST';
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export const LOGIN_SUCCESS = 'LoginActionTypes/LOGIN_SUCCESS';
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export const LOGIN_FAILURE = 'LoginActionTypes/LOGIN_FAILURE';
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {error: AxiosError};
}

export const GET_USER_DATA_REQUEST = 'LoginActionTypes/GET_USER_DATA_REQUEST';
export interface GetUserDataRequestAction {
  type: typeof GET_USER_DATA_REQUEST;
}

export const GET_USER_DATA_SUCCESS = 'LoginActionTypes/GET_USER_DATA_SUCCESS';
export interface GetUserDataSuccessAction {
  type: typeof GET_USER_DATA_SUCCESS;
  payload: {loginData: loginDataType};
}

export const GET_USER_DATA_FAILURE = 'LoginActionTypes/GET_USER_DATA_FAILURE';
export interface GetUserDataFailureAction {
  type: typeof GET_USER_DATA_FAILURE;
  payload: {error: Error | string};
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | GetUserDataRequestAction
  | GetUserDataSuccessAction
  | GetUserDataFailureAction;
