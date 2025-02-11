import { render, screen } from "@testing-library/react";
import BookDetail from "./component/BookDetail/BookDetail.tsx";
import React from "react";

describe("BookDetail", () => {
    it("renders description", () => {
        const props = {
            book: {
                id: 1,
                name: "Refactoring",
                description:
                    "Martin Fowler's Refactoring defined core ideas and techniques " +
                    "that hundreds of thousands of developers have used to improve " +
                    "thier software.",
            },
        };
        render(<BookDetail {...props} />);

        const description = screen.getByText(props.book.description);
        expect(description).toBeInTheDocument();
    });

});
