import React from 'react';
import {Box} from '@mui/material';

import {Header} from '../../components/Header/Header';

export const MainPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box sx={{width: '90%', bgcolor: '#e9e9e9', padding: '10px 20px', margin: '50px auto'}}>
        <h1>Main Page</h1>
      </Box>
    </Box>
  );
};
