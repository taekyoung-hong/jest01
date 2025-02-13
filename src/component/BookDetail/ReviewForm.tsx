import { useState } from "react";
import { Book } from "../../types";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { addReview } from "../../reviewSlice";
import React from "react";
import { Button, TextField } from "@mui/material";
import { fetchBookDetails } from "../../bookDetailSlice";

const ReviewForm = ({ book }: { book: Book }) => {
    const [name, setName] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = () => {
        dispatch(addReview({ id: book.id, name, content}));
        dispatch(fetchBookDetails(book.id.toString()));
    };
    
    return (
        <form noValidate autoComplete="off">
            <TextField 
                name="name" 
                data-testid="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />

            <TextField 
                name="content" 
                data-testid="content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
            />

            <Button 
                name="submit" 
                data-testid="submit"
                onClick={() => handleSubmit()}
            >
                Submit
            </Button>
        </form>
    );
};

export default ReviewForm;
