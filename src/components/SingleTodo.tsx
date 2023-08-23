import React from 'react'
import { Todo } from './Model';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo = ({todo,todos,setTodos} : Props) => {
  return (
    <div>SingleTodo</div>

    )
}