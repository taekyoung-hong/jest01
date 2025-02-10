import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BookList from './component/BookList/BookList.tsx';
import { Book } from './types.ts';
import axios from 'axios';


function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/books').then(res => setBooks(res.data));
  }, [])

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
