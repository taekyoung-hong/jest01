import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// BookListState와 bookListReducer를 정의합니다.
interface BookListState {
    term: string;
}

const initialState: BookListState = {
    term: "",
};

function bookListReducer(state: BookListState = initialState, action: { type: string; payload?: any }): BookListState {
    switch (action.type) {
        case 'SET_TERM':
            return { ...state, term: action.payload };
        default:
            return state;
    }
}

describe("SearchBox", () => {
    it("renders input", () => {
        const mockStore = configureStore({
            reducer: {
                list: bookListReducer,
            }
        });

        const mockOnSearch = jest.fn();

        render(
            <Provider store={mockStore}>
                <SearchBox term="" onSearch={mockOnSearch} />
            </Provider>
        );

        const input = screen.getByRole("textbox");
        act(() => {
            userEvent.type(input, "Refactoring");
        });

        const state = mockStore.getState();
        expect(state.list.term).toEqual("Refactoring");
        expect(mockOnSearch).toHaveBeenCalledWith("Refactoring");
    });

    it('trim empty strings', () => {
        const mockStore = configureStore({
            reducer: {
                list: bookListReducer,
            }
        });

        const mockOnSearch = jest.fn();

        render(
            <Provider store={mockStore}>
                {/* SearchBox에 props 지정 및 설정해줬습니다. 
                BookDetailContainer.tsx 이부분에서 term 이 정의되지 않았다고 에러가 발생해서 term을 지정해줬습니다.
                */}
                <SearchBox term="" onSearch={mockOnSearch} />
            </Provider>
        );

        const input = screen.getByRole("textbox");
        act(() => {
            userEvent.type(input, "  ");
        });

        const state = mockStore.getState();
        expect(state.list.term).toEqual("");
        expect(mockOnSearch).toHaveBeenCalledWith("");
    });
});
