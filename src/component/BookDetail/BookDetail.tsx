import React, { useState } from "react";
import { Book } from "../../types";
import ReviewList from "../ReviewList/ReviewList";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";


const getDescriptionFor = (book: Book) => {
    return book.description ? book.description : book.name;
};

const BookDetail = ({ book }: { book: Book }) => {
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="detail">
            <h2 className="book-title">{book.name}</h2>
            <p className="book-description" data-testid="book-description">
                {getDescriptionFor(book)}
            </p>
            <form noValidate autoComplete="off">
                <TextField name="name" data-testid="name" value={name} onChange={(e) => setName(e.target.value)} />

                <TextField name="content" data-testid="content" value={content} onChange={(e) => setContent(e.target.value)} />

                <Button name="submit" data-testid="submit">
                    Submit
                </Button>
            </form>

            {book.reviews && <ReviewList reviews={book.reviews} />}
        </div>
    );
};


export default BookDetail;
