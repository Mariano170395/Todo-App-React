import React from 'react'
import './TodoCounter.css'

const TodoCounter = (props) => {
    return (
        <div>
           <h1 className='TodoCounter'>Hac completado {props.completed} de {props.total} To Dos</h1>
        </div>
    )
}

export {TodoCounter} 
