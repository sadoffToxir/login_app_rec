import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {ROUTES} from './routes';

import {NotFound} from '../pages/NotFound/NotFound';
import {PrivateRoute} from './PrivateRoute';
import {MainPage} from '../pages/MainPage/MainPage';
import {Login} from '../pages/Login/Login';

export const RoutesContainer: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.MAIN_PAGE}
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />

        <Route
          path={ROUTES.NOT_FOUND}
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          }
        />

        <Route path={ROUTES.LOGIN_PAGE} element={<Login />} />
        <Route path={'*'} element={<Navigate to={ROUTES.NOT_FOUND} />} />
      </Routes>
    </Router>
  );
};
export default RoutesContainer;
