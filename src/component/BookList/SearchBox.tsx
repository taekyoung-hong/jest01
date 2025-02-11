import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchBooks, setTerm } from "../../bookListSlice";

// Prop 타입 정의
interface SearchBoxProps {
    term: string; 
    onSearch: (term: string) => void; 
}

const SearchBox: React.FC<SearchBoxProps> = ({ term, onSearch }) => {
    const dispatch = useDispatch<AppDispatch>();

    const performSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value && value.trim().length === 0) {
            return;
        }

        
        onSearch(value);
        dispatch(fetchBooks(value));
    };

    return (
        <TextField
            label="Search"
            data-test="search"
            value={term} 
            onChange={performSearch}
            margin="normal"
            variant="outlined"
        />
    );
};

export default SearchBox;
