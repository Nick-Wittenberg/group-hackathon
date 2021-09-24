import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

export const Book = ({ onClick, bookList }) => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  const fetchBook = async () => {
    const response = await fetch(`http://localhost:5000/books/${id}`);
    const book = await response.json();
    setBook(book);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <div>
      <ul className="bookList">
        <li className="bookItem" key={book._id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <p>{book.published}</p>
        </li>
      </ul>
    </div>
  );
};
