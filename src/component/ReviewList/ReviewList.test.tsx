import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import React, { act } from "react";
import BookDetail from "../BookDetail/BookDetail";
import { userEvent } from "@testing-library/user-event";
import ReviewItem from "./ReviewItem";


it("renders reviews", () => {
    const props = {
        book: { 
            id: 1, 
            name: "Refactoring",
            description: 
                "Martin Fowler's Refactoring defined core ideas and techniques...",
            reviews: [
                {
                    id: 1,
                    bookId: 1,
                    name: "Juntao",
                    date: "2023/06/21",
                    content: "Excellent work, really impressed by your efforts",
                },                    
            ]
        },
    };
    render(<BookDetail {...props} />);
    const reviews = screen.getAllByTestId("review");
    expect(reviews.length).toBe(1);
    expect(reviews[0].innerHTML).toEqual("Excellent work, really impressed by your efforts");
});

it("copy content to a textarea for editing", () => {
    const review = {
        id: 1,
        bookId: 1,                
        name: "Juntao Qiu",
        date: "2023/06/21",
        content: "Excellent work, really impressed by your efforts",
    };
    render(<ReviewItem review={review} />);
    const button = screen.getByRole('button');
    const content = screen.getByTestId("review-content");
    expect(content).toBeInTheDocument();
    act(() => {
        userEvent.click(button);
    })
    const editingContent = screen.getByRole("textbox");
    expect(content).not.toBeInTheDocument();
    expect(editingContent).toBeInTheDocument();
    expect(editingContent).toHaveValue("Excellent work, really impressed by your efforts");
});
