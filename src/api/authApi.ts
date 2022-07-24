import axios from 'axios';
import {authUserApi, loginApi} from '.';
import {loginDataType} from '../types/loginTypes';

export const login = async (loginData: loginDataType) => {
  return (await axios.post(loginApi, loginData)).data;
};

export const fetchUserData = async (token: string) => {
  return await axios.get(authUserApi, {headers: {authorization: token}});
};
