import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:5000/books");
    const books = await response.json();
    setBookList(books);
  };

  const fetchBook = async (id) => {
    const response = await fetch(`http://localhost:5000/books/${id}`);
    const book = await response.json();
    setBookList([book]);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const onClick = (event) => {
    const id = event.target.value;
    console.log(id);
    fetchBook(id);
  };

  return (
    <div className="App">
      <h1 className="header">Books and Stuff and a Comb</h1>
      <p className="description">
        A website for women in their mid 40's who have disposable income
      </p>
      <ul className="bookList">
        {bookList.map((book) => (
          <li className="bookItem" key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.published}</p>
            <button value={book._id} onClick={onClick}>
              More Info
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  // Fetch all gifts/books
  // Display list of gifts/books
  // "/" endpoint to fetch
}

export default App;
