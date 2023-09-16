import React,{useState} from 'react';
import './App.scss';
import { InputField } from './components/InputField';
import { Todo } from './components/Model';
import { Todolist } from './components/Todolist';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';

// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let role:[number,string];
// let anyType :any;
// let unknownType : unknown; // recommended instead of any

// let printName: (name:string) => never; //void returns undefied and never doesnt return anything

// // function printName(name:string){
// //   console.log(name)
// // }

// // printName("ronko")

// // type Person = {
// //   name: string;
// //   age? : number;
// // }

// // let person:Person= {
// //   name : "ROnko",
// // };

// // let lotsOfPeople: Person[];

// interface Person {
//   name : string;
//   age? : number;
// }

// interface Guy extends Person {
//   proffesion : string;
// }

const App: React.FC = () => {

  const [todo,setTodo] =  useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(), todo:todo, isDone: false}]);
      setTodo("");
    }
  }

  const onDragEnd = (result:DropResult) => {

    const {source, destination } = result;

    if(!destination) return;
    

    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let active = todos;
    let complete = completedTodos;
    
    if(source.droppableId === 'TodosList'){
      add = active[source.index];
      active.splice(source.index, 1);
    }else{
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === 'TodosList'){
      active.splice(destination.index,0,add);
    }else{
      complete.splice(destination.index,0,add);
    }

    setCompletedTodos(complete);
    setTodos(active);

  };

  return (
    <DragDropContext onDragEnd={(onDragEnd)}>
    <div className="App">

      <span className='heading'>Taskify</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

      <Todolist todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>

    </div>
    </DragDropContext>
  );
}

export default App;
