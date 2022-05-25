import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Notification from '../../Components/Notification/Notification'
import { register } from '../../JS/Actions/user'
import './Register.css'

const Register = () => {
    const [newUser, setNewUser] = useState({})
    const errors = useSelector((state) => state.userReducer.errors);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleUser = (e) => {
        e.preventDefault();
        dispatch(register(newUser))
        navigate('/')
    }

    return (
        <div className='register'>
            <h1>Register User</h1>
            {errors && errors.map((el) => <Notification error={el} />)}
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange}  />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}  />
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter password" name="password" onChange={handleChange}  />
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChange} />
            <Link to='/profile'><Button className='btn-register' variant="primary" type="submit" onClick={handleUser} >Register</Button></Link>
        </div>
    )
}

export default Register