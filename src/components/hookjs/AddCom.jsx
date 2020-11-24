import React,{ useContext, useEffect, useState } from 'react';
import TodosList from '../hookjs/TodosList'
import {Context} from '../../App'

export default function AddCom(){
    const [loding, setLoding] = useState(false);

    const appContext = useContext(Context)
    useEffect(()=>{
        const row = localStorage.getItem('data');
        appContext.dispatch({type: 'reset', payload: JSON.parse(row)})
    },[])

    useEffect(() =>{
        localStorage.setItem('data', JSON.stringify(appContext.state))
        setLoding(false)
    },[appContext.state])
    
    const appContextDispatch = () => {
        appContext.dispatch({type:'add'})
        setLoding(true)
    };

    return (<div className="container"> 
        <div>This is testing react hook {loding? <i className="fa fa-circle-o-notch fa-spin">Loading...</i> : ""} </div>
            <br/><br/>        
            <h5>Todo app</h5>
            <button onClick={appContextDispatch}> {loding? <i className="fa fa-circle-o-notch fa-spin">Loading...</i> : "New todo"}  </button>
           
            <br/><br/>
        <TodosList items={appContext.state} />
    </div>);
}
