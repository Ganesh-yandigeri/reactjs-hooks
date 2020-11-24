import React, { useState, useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './contacts/Contact';
import {selectAllContacts, clearAllContacts, deleteAllContacts } from './actions/contactAction';
import { Link } from 'react-router-dom'

const Home = (props) => {
    let selectedContacts = [];
    const [selectAll, setSelectAll] = useState(false)
    const contacts = useSelector((state) => (state.contacts.contacts));
    const dispatch = useDispatch();
    selectedContacts = useSelector((state)=> state.contacts.selectedContacts);
    useEffect(() => {
        if(selectAll){
            dispatch(selectAllContacts(contacts.map(contact => contact.id)));
        }else{
            dispatch(clearAllContacts());
        }
       
    }, [selectAll])

    return (
        <>
        {
            selectedContacts.length !== 0 ? (
                <button 
                className="btn btn-danger" 
                onClick={(e) => dispatch(deleteAllContacts())}>delete all</button>
            ): null
        }
        <div className="container mt-3 mb-4">
        <Link to="/add-contact" className="btn btn-outline-success">Create contact</Link>
          <table className="table shadow">
            <thead className="table-danger text-white">
                <tr>
                <th>
                    <div className="custom-control custome-check-box">
                        <input type="checkbox"
                        id="selectAll"
                        className="custom-control-input"
                        onClick={() => setSelectAll(!selectAll)}
                        value={selectAll}/>
                        <label htmlFor="selectAll" className="custom-control-label"></label>
                    </div>
                </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {   
                    contacts.map((contact, key) => 
                        <Contact contact={contact} key={key} selectAll={selectAll} /> 
                    )
                }
            </tbody>
            </table>
            </div>
        </>
    )
}

export default Home;