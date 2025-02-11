import { render, screen } from "@testing-library/react";
import BookDetail from "./BookDetail.tsx";
import React from "react";

describe("BookDetail", () => {
    it("renders review form", () => {
        const props = {
            book: { 
                id: 1, 
                name: "Refactoring",
                description: 
                    "Martin Fowler's Refactoring defined core ideas and techniques...",
            },
        };
        render(<BookDetail {...props} />);
        const nameInput = screen.getByTestId("name");
        const contentInput = screen.getByTestId("content");
        const button = screen.getByTestId("submit");
        expect(nameInput).toBeInTheDocument();
        expect(contentInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    


});