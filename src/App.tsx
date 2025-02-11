import { Typography } from '@mui/material';
import React from 'react';
import BookListContainer from './component/BookListContainer/BookListContainer.tsx';

const App = () => {

  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
}

export default App;