import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router';

//user
export async function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    // await axios.get(`http://localhost:3000/login/${user.email}/${user.password}`).then(
    await axios.get("http://localhost:3000/login/'lemindy43@gmail.com/'333333'").then(
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
            console.log('err in login services')
        })
}
//user
export async function CreateAccount(user) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    await axios.post('http://localhost:3000/createAccount', { 'name': 'testName', 'email': 'lemindy43@gmail.com', 'password': '123' }).then(
        res => {
            console.log('create works')
            // console.log(JSON.stringify(res.data))
            // setName(user.name);
            // setEmail(user.email);
            // <Redirect to={{ pathname: '/post', state: { flash: 'created account successfully!' } }} />
        },
        err => {
            console.log('error in createAccount services')
        }
    )
}

export  function hello() {
     axios.get('http://localhost:3000/hello').then(
        res => {
            alert('respond from hello service' + JSON.stringify(res))
        },
        err => {
            alert('err in service hello' + err)
        }
    )
}
