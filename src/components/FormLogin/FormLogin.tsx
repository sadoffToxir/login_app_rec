import React from 'react';
import {FormLoginUsername} from './FormLoginUsername/FormLoginUsername';
import {FormLoginEmail} from './FormLoginEmail/FormLoginEmail';
import {loginDataType} from '../../types/loginTypes';
import {useDispatch, useSelector} from 'react-redux';
import {loginThunk} from '../../thunks/authThunks';
import {ThunkDispatch} from 'redux-thunk';
import {AuthStateType} from '../../reducers/authReducer';
import {AnyAction} from 'redux';
import {AppStateType} from '../../store/store';
import {Box} from '@mui/system';

interface Props {}

export const FormLogin: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const requestError = useSelector((state: AppStateType) => state.error);
  const statusText = requestError['LoginActionTypes/LOGIN']?.response?.statusText;

  const [formState, setFormState] = React.useState<loginDataType>({
    email: '',
    userName: '',
    password: '',
  });
  const [page, setPage] = React.useState(1);

  const handleSubmit = () => {
    (dispatch as ThunkDispatch<AuthStateType, unknown, AnyAction>)(loginThunk(formState));
  };

  const changeHandler = (e: React.SyntheticEvent) => {
    const name = (e.currentTarget as HTMLInputElement).name;
    const value = (e.currentTarget as HTMLInputElement).value;
    setFormState((prevState) => {
      return {...prevState, [name]: value};
    });
  };

  return (
    <form>
      <>
        {page === 1 ? (
          <FormLoginEmail email={formState.email} changeHandler={changeHandler} setPage={setPage} />
        ) : page === 2 ? (
          <FormLoginUsername
            userName={formState.userName}
            password={formState.password}
            changeHandler={changeHandler}
            handleSubmit={handleSubmit}
          />
        ) : null}
        {statusText && <Box sx={{color: 'red'}}>{statusText}</Box>}
      </>
    </form>
  );
};
