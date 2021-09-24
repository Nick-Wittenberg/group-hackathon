import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book.js";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="header">Books and Stuff and a Comb</h1>
        <p className="description">
          A website for women in their mid 40's who have disposable income
        </p>
        <Link to="/">Book List</Link>

        <Switch>
          <Route path="/books/:id">
            <Book />
          </Route>
          <Route path="/">
            <BookList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
