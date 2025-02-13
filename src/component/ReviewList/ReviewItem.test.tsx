import { act, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ReviewItem from "./ReviewItem";
import '@testing-library/jest-dom/extend-expect';
import { expect } from '@jest/globals';
import axios from "axios";
import { JSX } from "react/jsx-runtime";
 

it("renders book review detailed information", () => {
    const review = {
        id: 1,
        bookId: 1,
        name: "Juntao Qiu",
        date: "2023/06/21",
        content: "Excellent work, really impressed by your efforts",
    };
    render(<ReviewItem review={review} />);
    expect(screen.getByTestId("name").textContent).toEqual("Juntao Qiu");
    expect(screen.getByTestId("review-content").textContent).toEqual("Excellent work, really impressed by your efforts");

}),

it('edit a review item', () => {
    const review = {
        id: 1,
        bookId: 1,
        name: "Juntao Qiu",
        date: "2023/06/21",
        content: "Excellent work, really impressed by your efforts"
    };
    render(<ReviewItem review={review} />);
    const button = screen.getByRole('button');
    expect(button).toEqual('Edit');
    act(() => {
        userEvent.click(button);
    })
    expect(button).toEqual('Submit');
})

it("update the content", () => {
    const review = {
        id: 1,
        bookId: 1,                
        name: "Juntao Qiu",
        date: "2023/06/21",
        content: "Excellent work, really impressed by your efforts",
    };
    render(<ReviewItem review={review} />);
    const putSpy = jest.spyOn(axios, "put").mockResolvedValue({ data: review });
    const button = screen.getByRole("button");
    // enter the editing mode
    act(() => {
        userEvent.click(button);
    });
    const editingContent = screen.getByRole("textbox");
    expect(document.body.contains(editingContent)).toBe(true); // 대체 가능
    act(() => {
        userEvent.clear(editingContent);
        userEvent.type(editingContent, "I mean this is fantastic");
    });
    // submit the form
    act(() => {
        userEvent.click(button);        
    });
    expect(putSpy).toHaveBeenCalledWith(
        "http://localhost:8080/books/1/reviews/1",
        { content: "I mean this is fantastic" }
    );        
});

