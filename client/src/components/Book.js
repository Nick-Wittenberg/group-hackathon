import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Book = ({ onClick, bookList }) => {
  return (
    <div>
      <ul className="bookList">
        {bookList.map((book) => (
          <li className="bookItem" key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.published}</p>

            <button value={book._id} onClick={onClick}>
              <Link to={`/books/${book._id}`}>More Info</Link>
              More Info
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
