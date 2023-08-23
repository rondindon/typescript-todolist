import React,{useRef} from 'react';
import './styles.scss';

interface Props{
    todo: string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd} : Props) => {

const inputRef = useRef<HTMLInputElement>(null)

  return (
    
    <form className='input' onSubmit={(event) => {
        handleAdd(event)
        inputRef.current?.blur();
    }}>

        <input ref={inputRef} type='input' value={todo} onChange={(e) => { setTodo(e.target.value)  }} placeholder='Enter a task' className='input-box'/>
        <button className='submit-btn' type='submit' onSubmit={handleAdd}>Go</button>

    </form>

  )
}