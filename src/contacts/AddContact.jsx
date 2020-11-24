import  React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './../actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom'

const AddContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    let history = useHistory();

    const createContact = (e) => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            email: email,
            phone: phone
        }
        dispatch(addContact(new_contact));
        history.push('/');
    }

    return (
        <div className="container shadow mt-3 mb-3">
            <h1> Add Contact </h1>        
            <form onSubmit={(e) => createContact(e)}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter Name</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter Email</label>
                <input type="email" 
                    className="form-control" 
                    placeholder="Enter your email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter Phone</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
            </div>    
            <button type="submit" className="btn btn-primary mb-3">Create Contact</button>
            </form>

        </div>);
}

export default AddContact;