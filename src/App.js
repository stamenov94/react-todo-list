import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput></TodoInput>
          <TodoList></TodoList>

        </div>
        <h1>heelo from app</h1>
      </div>
    );
  }
}

export default App;
