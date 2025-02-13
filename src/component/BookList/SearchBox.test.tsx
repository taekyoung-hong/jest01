import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import bookListReducer from "../../bookListSlice"


describe("SearchBox", () => {
    it("renders input", () => {
        const mockStore = configureStore({
            reducer: {
                list: bookListReducer,
            }
        })
        render(
            <Provider store={mockStore}>
                <SearchBox term={""} onSearch={function (term: string): void {
                    throw new Error("Function not implemented.");
                }} />
            </Provider>

        );
        const input = screen.getByRole("textbox");
        act(() => {
            userEvent.type(input, "Refactoring");
        });

        const state = mockStore.getState();
        expect(state.list.term).toEqual("Refactoring");
    });

    it('trim empty strings', () => {
        const mockStore = configureStore({
            reducer: {
                list: bookListReducer,
            }
        })
        render(
            <Provider store={mockStore}>
                <SearchBox term={""} onSearch={function (term: string): void {
                    throw new Error("Function not implemented.");
                }} />
            </Provider>

        );
        const input = screen.getByRole("textbox");
        act(() => {
            userEvent.type(input, "  ");
        });
        const state = mockStore.getState();
        expect(state.list.term).toEqual("");
    })
});