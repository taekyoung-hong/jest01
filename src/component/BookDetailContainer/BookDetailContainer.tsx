import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../types";
import axios from "axios";
import React from "react";
import BookDetail from "../BookDetail/BookDetail";
import { useBook } from "../../hook/useBook.tsx";

const BookDetailContainer = () => {
    const { book } = useBook();

    return <BookDetail book={book} />;
};


export default BookDetailContainer;
