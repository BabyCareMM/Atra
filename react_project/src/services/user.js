import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router';

//user
export function Login(user) {
    // const [data, setData] = useState('');
    return axios.get(`http://localhost:3000/login/${user.email}/${user.password}`)
}
//user
export function CreateAccount(user) {
    return axios.post('http://localhost:3000/createAccount', user)
}
