import {AxiosError} from 'axios';
import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import * as actionCreators from '../actionCreators/authActionCreators';
import {fetchUserData, login} from '../api/authApi';
import {AuthStateType} from '../reducers/authReducer';
import {loginDataType} from '../types/loginTypes';
import {getTokenInSessionStorage, putTokenInSessionStorage} from '../utils/sessionStorage';

export const loginThunk =
  (loginData: loginDataType): ThunkAction<void, AuthStateType, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      dispatch(actionCreators.loginRequest());
      const data = (await login(loginData)).token;
      putTokenInSessionStorage(data);
      dispatch(actionCreators.loginSuccess());
      dispatch(getUserDataThunk());
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(actionCreators.loginFailure(error));
      }
    }
  };

export const getUserDataThunk = (): ThunkAction<void, AuthStateType, unknown, AnyAction> => async (dispatch) => {
  try {
    dispatch(actionCreators.getUserDataRequest());
    const token = getTokenInSessionStorage();
    if (typeof token === 'string') {
      const data = (await fetchUserData(token)).data;
      dispatch(actionCreators.getUserDataSuccess(data));
    } else {
      throw {message: 'Token not found in session storage'};
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(actionCreators.getUserDataFailure(error));
    }
  }
};
