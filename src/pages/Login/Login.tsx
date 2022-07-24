import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {FormLogin} from '../../components/FormLogin/FormLogin';
import {ROUTES} from '../../routes/routes';
import {AppStateType} from '../../store/store';
import './Login.css';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const userName = useSelector((state: AppStateType) => state.auth.userData?.userName);

  React.useEffect(() => {
    if (!!userName) navigate(ROUTES.MAIN_PAGE);
  }, [userName]);

  return (
    <div className='Container'>
      <nav>Hello Candidate!</nav>
      <div className='Form-Wrapper'>
        <FormLogin />
      </div>
    </div>
  );
};
