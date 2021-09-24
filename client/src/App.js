import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book.js";

function App() {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:5000/books");
    const books = await response.json();
    setBookList(books);
  };

  const fetchBook = async (id) => {
    const response = await fetch(`http://localhost:5000/books/${id}`);
    const book = await response.json();
    setBook([book]);
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
    <Router>
      <div className="App">
        <h1 className="header">Books and Stuff and a Comb</h1>
        <p className="description">
          A website for women in their mid 40's who have disposable income
        </p>
        <Link to="/books">Book List</Link>

        <Switch>
          <Route path="/books">
            <BookList bookList={bookList} onClick={onClick} />
          </Route>
          <Route path="/books/:id">
            <Book />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
