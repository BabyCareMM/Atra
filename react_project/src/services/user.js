import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router';

const [name, setName] = useState('')
const [email, setEmail] = useState('');

//user
export async function login(user) {
    await axios.get(`http://localhost:3000/login/${user.email}/${user.password}`).then(
        res => {
            if (res) {
                setName(res.name);
                setEmail(res.email);
                <Redirect to={{ pathname: '/post', state: { flash: 'logged in succeded!' } }} />
            }
            else {
                res.status(500).send("User does not exist!");
            }
        },
        err => {
            res.status(400).send('sorry an error occurred please try again later' + err)
        })
}
//user
export async function createAccount(user) {
    await axios.post('http://localhost:3000/createAccount', user).then(
        res => {
            console.log(JSON.stringify(res.data))
            setName(user.name);
            setEmail(user.email);
            <Redirect to={{ pathname: '/post', state: { flash: 'created account successfully!' } }} />
        },
        err => {
            res.status(400).send('sorry an error occurred please try again later' + err)
        }
    )
}
