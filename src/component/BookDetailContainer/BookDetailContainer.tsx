import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../types";
import axios from "axios";
import React from "react";
import BookDetail from "../BookDetail/BookDetail";
import { useBook } from "../../hook/useBook.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store.ts";
import { fetchBookDetails } from "../../bookDetailSlice.tsx";

const BookDetailContainer = () => {
    const { id = "" } = useParams<string>();
    const { book } = useSelector((state: RootState) => ({
        book: state.detail.book,
    }));
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchBookDetails((id)));
    }, [dispatch]);

    return <BookDetail book={book} />;
};



export default BookDetailContainer;
