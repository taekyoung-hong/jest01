import axios from "axios";
import { useEffect, useState } from "react";
import BookList from "../BookList/BookList.tsx";
import React from "react";
import { useBooks } from "../../hook/useBooks.ts";

const BookListContainer = () => {
    const {loading, error, books} = useBooks();
    
    return <BookList books={books} />
}


export default BookListContainer;