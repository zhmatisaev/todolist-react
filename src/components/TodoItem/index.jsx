import React, { useContext } from 'react'
import './TodoItem.css'
import { Context } from '../../context'



export const TodoItem = ({ todo, id }) => {

    const { deleteTodo, completeTodo } = useContext(Context)
    return <div className="todo-item" >
        <ul>
            <li className="text" style={todo.complete ? ready : notReady}>{todo.name}</li>
            <button onClick={() => completeTodo(id)} className="done"   >{todo.complete ? 'отменить' : " выполнить"}</button>
            <button onClick={() => deleteTodo(id)} className="delete">Удалить</button>
        </ul>

    </div>

}

const ready = {
    textDecoration: "line-through"
}

const notReady = {
    textDecoration: "none"

}