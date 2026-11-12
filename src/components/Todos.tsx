import Todo from "./Todo";
import { useState, useEffect } from "react";
import styles from "./Todos.module.css";

type Props = {};

type Todotype = {
  id: number;
  title: string;
  body: string;
};

export default function Todos({}: Props) {
  const [todos, setTodos] = useState<Todotype[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div className={styles.flexbox}>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.body} />
      ))}
    </div>
  );
}
