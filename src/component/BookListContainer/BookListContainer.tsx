    import { AppDispatch, RootState } from "../../store";
    import { useEffect } from "react";
    import { fetchBooks } from "../../bookListSlice";
    import SearchBox from "../BookList/SearchBox";
    import BookList from "../BookList/BookList";
    import React from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { useBooks } from "../../hook/useBooks"

    const BookListContainer = () => {
        const { term, setTerm }  = useBooks();        
        const { books } = useSelector((state: RootState) => ({
            books: state.list.books,
        }));
        
        const dispatch = useDispatch<AppDispatch>();

        useEffect(() => {
            dispatch(fetchBooks(""));
        }, [dispatch])
        

        return (
            <>
                <SearchBox term={term} onSearch={setTerm} />            
                <BookList books={books} />
            </>
        );
    };

    export default BookListContainer;

