import React, {Dispatch, SetStateAction} from 'react';
import {Button, TextField, Typography} from '@mui/material';
import * as yup from 'yup';
import {Box} from '@mui/system';

interface FormLoginEmailTypes {
  email: string;
  changeHandler: (e: React.SyntheticEvent) => void;
  setPage: Dispatch<SetStateAction<number>>;
}

export const FormLoginEmail: React.FC<FormLoginEmailTypes> = ({email, changeHandler, setPage}) => {
  const [validErrors, setValidErrors] = React.useState([]);
  const [isTouched, setIsTouched] = React.useState(false);

  const loginEmailSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const nextHandler = () => {
    setPage(2);
  };

  React.useEffect(() => {
    loginEmailSchema
      .validate({email})
      .then(() => {
        setValidErrors([]);
      })
      .catch((err) => {
        setValidErrors(err.errors);
      });
  }, [email]);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: 'fit-content', margin: '0 auto', gap: '10px'}}>
      <Typography variant='h4'>First Step!</Typography>
      <TextField
        type='text'
        name={'email'}
        placeholder='Email'
        value={email}
        onChange={changeHandler}
        onBlur={() => setIsTouched(true)}
      />
      {isTouched &&
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
        onClick={nextHandler}
      >
        Next
      </Button>
    </Box>
  );
};
