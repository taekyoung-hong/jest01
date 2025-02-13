import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";  // 실제 store 경로로 변경
import BookDetail from "./BookDetail.tsx";
import React from "react";

const renderWithProvider = (component: JSX.Element) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
    };
};

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
        renderWithProvider(<BookDetail {...props} />);
        const nameInput = screen.getByTestId("name");
        const contentInput = screen.getByTestId("content");
        const button = screen.getByTestId("submit");
        expect(nameInput).toBeInTheDocument();
        expect(contentInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });


});
