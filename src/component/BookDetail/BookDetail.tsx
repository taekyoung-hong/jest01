import React, { useState } from "react";
import { Book } from "../../types";
import ReviewList from "../ReviewList/ReviewList";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addReview } from "../../reviewSlice";
import ReviewForm from "./ReviewForm";
import { fetchBookDetails } from "../../bookDetailSlice";

const getDescriptionFor = (book: Book) => {
    return book.description ? book.description : book.name;
};

const BookDetail = ({ book }: { book: Book }) => {
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = () => {
        dispatch(addReview({ id: book.id, name, content }));
        dispatch(fetchBookDetails(book.id.toString()));
    };


    return (
        <div className="detail">
            <h2 className="book-title">{book.name}</h2>
            <p className="book-description" data-testid="book-description">
                {getDescriptionFor(book)}
            </p>
            <ReviewForm book={book} />
            {book.reviews && <ReviewList reviews={book.reviews} />}
        </div>
 
    ); 

};




export default BookDetail;
