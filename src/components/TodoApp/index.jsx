import React, { useEffect, useState } from "react";
import Form from "../Form";
import TodoTitle from "../TodoTitle";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux";

function TodoApp() {
  const todos = useSelector((state) => state.todos.todos);
  const [activeTodos, setactiveTodos] = useState([]);
  const [inactiveTodos, setInactiveTodos] = useState([]);

  useEffect(() => {
    let active = todos.filter((el) => {
      return el.status == true;
    });
    setactiveTodos(active);

    let inactive = todos.filter((el) => {
      return el.status == false;
    });
    setInactiveTodos(inactive);
  }, [todos]);

  return (
    <div className="w-[432px] mx-auto pt-28 h-sceren bg-[#0D0714] pb-4">
      <Form></Form>
      {activeTodos.length > 0 ? (
        <TodoTitle
          title="Task to do"
          count={activeTodos.length}
          status={true}></TodoTitle>) : null}
      {todos.length > 0 &&
        activeTodos.map((todo, index) => {
          return (
            <TodoItem
              id={todo.id}
              key={index}
              title={todo.name}
              status={true}></TodoItem>
          );
        })}

      {inactiveTodos.length > 0 && (
        <TodoTitle
          title="Done "
          count={inactiveTodos.length}
          status={false}></TodoTitle> 
      )}

      {todos.length > 0 &&
        inactiveTodos.map((todo, index) => {
          return (
            <TodoItem
              id={todo.id}
              key={index}
              title={todo.name}
              status={false}></TodoItem>
          );
        })}
    </div>
  );
}

export default TodoApp;
