import React from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import * as yup from 'yup';

interface FormLoginUsernameTypes {
  userName: string;
  password: string;
  changeHandler: (e: React.SyntheticEvent) => void;
  handleSubmit: () => void;
}

export const FormLoginUsername: React.FC<FormLoginUsernameTypes> = ({
  userName,
  password,
  changeHandler,
  handleSubmit,
}) => {
  const [validErrors, setValidErrors] = React.useState([]);
  const [isTouched, setIsTouched] = React.useState({userName: false, password: false});

  const loginUsernameSchema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
  });

  React.useEffect(() => {
    loginUsernameSchema
      .validate({userName, password})
      .then(() => {
        setValidErrors([]);
      })
      .catch((err) => {
        setValidErrors(err.errors);
      });
  }, [userName, password]);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: 'fit-content', margin: '0 auto', gap: '10px'}}>
      <Typography variant='h4'>Second Step!</Typography>
      <TextField
        type='text'
        name={'userName'}
        placeholder='Username'
        value={userName}
        onChange={changeHandler}
        onBlur={() =>
          setIsTouched((prevState) => {
            return {...prevState, userName: true};
          })
        }
      />
      <TextField
        type='password'
        name={'password'}
        placeholder='Password'
        value={password}
        onChange={changeHandler}
        onBlur={() =>
          setIsTouched((prevState) => {
            return {...prevState, password: true};
          })
        }
      />
      {isTouched.password &&
        isTouched.userName &&
        validErrors.map((el, index) => {
          return (
            <Box key={index} sx={{color: 'red'}}>
              {el}
            </Box>
          );
        })}
      <Button
        sx={{width: 'fit-content', margin: '0 auto'}}
        disabled={validErrors.length !== 0}
        variant='contained'
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};
