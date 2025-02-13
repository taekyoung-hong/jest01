import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "./types";
import axios from "axios";

export const fetchBookDetails = createAsyncThunk<Book, string>(
    "bookDetails/fetch",
    async (id) => {
        console.log(`📡 Fetching book details for ID: ${id}`);
        const response = await axios.get(`http://localhost:8080/books/${id}`);
        console.log("📡 API Response:", response.data);
        return response.data;
    }
);


type BookDetailType = {
    book: Book;
    loading: boolean;
    error: boolean;    
};

const initialState: BookDetailType = {
    book: {
        id: 0,
        name: "",
    },
    loading: false,
    error: false,
};

const bookDetailsSlice = createSlice({
    name: "bookDetails",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookDetails.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchBookDetails.fulfilled, (state, action) => {
            state.book = action.payload;
            state.loading = false;
        })
        .addCase(fetchBookDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        });
    }
})

export default bookDetailsSlice.reducer;
