import React from "react";
import { screen, render } from "@testing-library/react";
import BookList from "./component/BookList/BookList.tsx";
import { MemoryRouter as Router } from "react-router-dom";

describe('BookList', () => {


    const renderWithRouter = (component: JSX.Element) => {
        return {
            ...render(<Router>{component}</Router>),
        };
    };


    it('render books', async () => {
        const props = {
            books: [
                { "id": 1, "name": "Refactoring" },
                { "id": 2, "name": "Domain-driven design" },
            ]
        };
        renderWithRouter(<BookList {...props} />);

        const headings = await screen.findAllByRole('heading')
        headings.forEach((heading, index) => {
            expect(heading).toHaveTextContent(props.books[index].name);
        });
    })

});
