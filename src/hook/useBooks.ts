import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../types";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    const fetchBooks = async (term: string) => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/books?q=${term}&_sort=id`);
        setBooks(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks(term);
  }, [term])

  return {
    books,
    term,
    setTerm
  }
}
