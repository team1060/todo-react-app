import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";
import { call } from "./service/ApiService";
import { propTypes } from "prop-types"
import TodoHeader from "./TodoHeader";

function App() {
  const [items, setItems] = useState([]);
  const todoApi = "/todo";

  useEffect(() => {
    call(todoApi, "GET", null)
      .then((response) => setItems(response.data));
  }, []);

  const addItem = (item) => {
    call(todoApi, "POST", item)
      .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call(todoApi, "PUT", item)
      .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    call(todoApi, "DELETE", item)
      .then((response) => setItems(response.data));
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className="App">
      <TodoHeader />
      <Container maxWidth="md">

        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
