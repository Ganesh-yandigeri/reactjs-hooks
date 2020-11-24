import React,{ useContext } from 'react';
import {Context} from '../../App'

const TodoItem = (props) => {
    const {id, completed, text} = props;
    
    const appContext = useContext(Context)
    
    return( <div style={{ display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between'  }} >
        <input type="checkbox" checked={completed} onChange={()=>appContext.dispatch({type: 'completed',payload: id})} />
        <input type="text" defaultValue={text} />{id}
        <button onClick={()=>appContext.dispatch({type: 'delete', payload: id})} 
            style={ 
                (completed) ? 
                {pointerEvents:'none',backgroundColor:'red',color:"wheat" } : 
                {display:'ture',backgroundColor:'blue',color:"wheat"}}>
                    X
        </button>
    </div> )
}

export default TodoItem;