import bookListReducer, { setTerm } from "./bookListSlice";

describe("bookListReducer", () => {
  
    interface BookListState {
        books: [];
        loading: boolean;
        error: string | null;
        term: string; // term 상태 추가
    }
    const initialState = {
        term: "",
        books: [],
        loading: false,
        error: false,
    };
    it("should handle setTerm action", () => {
        const action = setTerm("Refactoring");
        const newState = bookListReducer(initialState, action);

        expect(newState.term).toEqual("Refactoring");
    });
});
