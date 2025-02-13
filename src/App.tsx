import { Typography } from '@mui/material';
import React from 'react';
import BookListContainer from './component/BookListContainer/BookListContainer.tsx';
import { Route, Routes } from 'react-router-dom';
import BookDetailContainer from './component/BookDetailContainer/BookDetailContainer.tsx';

const App = () => {
  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <Routes>
        <Route path='/' element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
