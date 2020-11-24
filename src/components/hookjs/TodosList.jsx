import React from 'react'
import TodoItem from './TodoItem'

const TodosList = ({items = []}) => {
    
    return(
        items.map(item =>(
            <div key={item.id}> <TodoItem {...item} /> <br/></div>
        ))
    )
}

export default TodosList;

