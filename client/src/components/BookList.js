import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const BookList = ({ onClick }) => {
  const [bookList, setBookList] = useState([]);
  const fetchBooks = async () => {
    const response = await fetch("http://localhost:5000/books");
    const books = await response.json();
    setBookList(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <ul className="bookList">
        {bookList.map((book) => (
          <li className="bookItem" key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.published}</p>

            <Link to={`/books/${book._id}`}>More Info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
