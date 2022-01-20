import {React, useState} from 'react'
import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {

    let searchValueInput = (event)=>{
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div>
            <input 
            className='TodoSearch' 
            placeholder='Agregar To do'
            value={searchValue}
            onChange={searchValueInput}
            />
        </div>
    )
}

export {TodoSearch}
