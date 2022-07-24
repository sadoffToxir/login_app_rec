import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppStateType} from '../store/store';

interface PrivateRouteTypes {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteTypes> = ({children}) => {
  const userName = useSelector((state: AppStateType) => state.auth.userData?.userName);

  return !!userName ? children : <Navigate to='/login' />;
};
