import React from 'react'
import './styles.scss'
import { Todo } from './Model';
import { SingleTodo } from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Todolist: React.FC<Props> = ({todos,setTodos, completedTodos, setCompletedTodos} : Props) => {
  return (
    // <div className='todos'>

    //     {todos.map(todo => (
    //         <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
    //     ))}

    // </div>

    <div className='container'>

      <Droppable droppableId='TodosList'>
        {
          (provided,snapshot) => (

              <div className={`todos ${snapshot.isDraggingOver ? "drag-active" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>

              <span className='todos-header'>Active Tasks</span>
              {
                todos.map((todo,index) =>(
                  <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
                ))
              }
            {provided.placeholder}
      
            </div>

          )
        }

      </Droppable>


      <Droppable droppableId='TodosRemove'>
        {
          (provided,snapshot) => (

            <div className={`todos remove ${snapshot.isDraggingOver ? "drag-remove" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>

            <span className='todos-header'>Completed Tasks</span>
              {
                completedTodos.map((todo,index) =>(
                  <SingleTodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos}/>
                ))
              }

              {provided.placeholder}

      
            </div>

          )
        }
        </Droppable>

    </div>

  );
};