import { Typography } from '@mui/material';
import React from 'react';
import BookList from './component/BookList/BookList.tsx';
function App() {
  const books = [{ name: 'Refactoring' }, { name: 'Domain-driven design' }];

  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
}


export default App;
