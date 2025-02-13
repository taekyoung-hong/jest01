import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Review } from "./types";

interface ReviewState {
    reviews: Review[];
    loading: boolean;
    error: string | null;
}

const initialState: ReviewState = {
    reviews: [],
    loading: false,
    error: null,
};

type AddReviewRequest = {
    id: number;
    name: string;
    content: string;
}

export const addReview = createAsyncThunk<Review, AddReviewRequest>(
    "reviews/addReview",
    async ({ id, name, content }: AddReviewRequest) => {
        try {
            const response = await axios.post(`http://localhost:8080/books/${id}/reviews`,
                {
                    name,
                    content,
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

type UpdateReviewRequest = {
    bookId: number;
    reviewId: number;
    content: string;
};

export const updateReview = createAsyncThunk<Review, UpdateReviewRequest>(
    "reviews/updateReview",
    async ({ bookId, reviewId, content }: UpdateReviewRequest) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/books/${bookId}/reviews/${reviewId}`,
                { name, content }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);


const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addReview.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews.push(action.payload);
            })
            .addCase(addReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add review";
            })
            .addCase(updateReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateReview.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.reviews.findIndex((r) => r.id === action.payload.id);
                if (index !== -1) {
                    state.reviews[index] = action.payload;
                }
            })
            .addCase(updateReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to update review";
            });
    },
});

export const reviewSliceReducer = reviewSlice.reducer;
export default reviewSlice.reducer;
