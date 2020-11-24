import  React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from './../actions/contactAction';
import { useHistory, useParams } from 'react-router-dom'



const EditContact = () => {
    
    // console.log(contact);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    
    let{ id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state) => (state.contacts.contact));
    useEffect(()=>{
        if(contact != null){
            setName(contact.name);
            setEmail(contact.email );
            setPhone(contact.phone);
        }
        dispatch(getContact(id));
    },[contact]);

    const updateContactData = (e) => {
        e.preventDefault();
        const new_contact = Object.assign(contact, {
            name: name,
            email: email,
            phone: phone
        }) 
        // console.log(new_contact);
        dispatch(updateContact(new_contact));
        history.push('/');
    }

    return (
        <div className="container shadow mt-3 mb-3">
            <h1> Edit Contact </h1>        
            <form onSubmit={(e) => updateContactData(e) }>
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
            <button type="submit" className="btn btn-warning mb-3">Update Contact</button>
            </form>

        </div>);
}

export default EditContact;