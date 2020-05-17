/*
    - Should have it's own state
    - Form will either submit it's data to an API, and/or it will pass that data to another component
        - Either going to pass it down as a prop or up via props (setter function = const [ state, setState ] = useState() )
    - Form needs a way to manage the inputs
    - Form needs a way to manage submissions
*/

import React, { useState } from 'react';

const Form = props => {
    const [ formState, setFormState ] = useState({
        name:'',
        email:'',
        role: ''
    });

    console.log('Form State', formState)

    const submit = event => {
        event.preventDefault();
        props.setTeamMembers([...props.teamMembers, formState])
        setFormState({
            name:'',
            email:'',
            role: ''
        })
    }

    const handleChanges = event => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>Name: <input name='name' onChange={handleChanges} value={formState.name} type='text'/></label>
                <label>Email: <input name='email' onChange={handleChanges} value={formState.email} type='text'/></label>
                <label>Role: <input name='role' onChange={handleChanges} value={formState.role} type='text'/></label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};

export default Form;