import React,{useState,useRef,useEffect} from 'react'
import { Todo } from './Model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo = ({index,todo,todos,setTodos} : Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,isDone:!todo.isDone} : {...todo}))
    }

    const handleDelete = (id: number) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (event: React.FormEvent, id: number) => {
        event.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo,todo : editTodo} : {...todo}
        )));

        setEdit(false)
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() =>{
        inputRef.current?.focus();
    },[edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
        {
            (provided,snapshot) => (
                <form {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={`todos-single ${snapshot.isDragging ? "drag" : " "}`} onSubmit={(event) => handleEdit(event,todo.id)}>

                {
                    edit ? (
        
                        <input ref={inputRef} value={editTodo} onChange={(event) => setEditTodo(event.target.value)} className='todos-single-edit'/>
        
                    ) : todo.isDone ? (
        
                        <s className='todos-single-text'>{todo.todo}</s>
                    ) 
        
                    : (
                        <span className='todos-single-text'>{todo.todo}</span>
                    )
                }
        
                <div className='icons'>
        
                    <span className='icon' onClick={ () => {
                        if(!edit && !todo.isDone){
                            setEdit(!edit);
                        }
        
                    }}><AiFillEdit /></span>
                    <span className='icon' onClick={() => {handleDelete(todo.id)}}><AiFillDelete /></span>
                    <span className='icon' onClick={() => {handleDone(todo.id)}}><MdDone /></span>
        
                </div>
        
            </form>
            )
        }
    </Draggable>

    )
};