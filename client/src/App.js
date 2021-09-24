import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:5000/products");
    const books = await response.json();
    console.log(books);
    setBookList(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Books and Stuff and a Comb</h1>
      <p>A website for women in their mid 40's who have disposable income</p>
      <ul className="bookList">
        {bookList.map((book, index) => (
          <li className="bookItem" key={book.index}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.published}</p>
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
