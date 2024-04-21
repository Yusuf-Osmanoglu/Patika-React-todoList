import React from 'react';
import './App.css';

function TodoApp() {
  return (
  <div> 

    <h1 className='title'>todos</h1>

    <section className="todoapp">
      <header className="header">
        <form>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>

        <ul className="todo-list">
          <TodoItem label="Learn JavaScript" />
          <TodoItem label="Learn React" />
          <TodoItem label="Have a life!" />
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong> items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/">Active</a>
          </li>
          <li>
            <a href="#/">Completed</a>
          </li>
        </ul>

        <button className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
    </div>
  );
}

function TodoItem({ label }) {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{label}</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
}

export default TodoApp;
