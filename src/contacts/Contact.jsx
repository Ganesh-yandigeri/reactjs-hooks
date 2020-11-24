import React from "react";
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { deleteContact } from './../actions/contactAction';
import { useDispatch } from 'react-redux';

const Contact = ({ contact, selectAll }) => {
    let dispatch = useDispatch();
    const deleteCont = (id) =>{
        dispatch(deleteContact(id));
    }
    const { name, phone, email, id } = contact;

    return(
        <>
      
        <tr>
            <td>
                <div className="custom-control custome-check-box">
                    <input type="checkbox"
                    checked={selectAll}
                    className="custom-control-input"/>
                    <label htmlFor="" className="custom-control-label"></label>
                </div>
            </td>
            
            <td><Avatar name={name} size={45} round={true} className="mr-2"/>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
               <Link to={`/edit-contact/${id}`} ><i className="material-icons text-info">edit</i> </Link>| 
               <i className="material-icons text-danger" onClick={() =>  deleteCont(id)}>remove_circle</i>
            </td>
            
        </tr>
        </>
    )
}

export default Contact;