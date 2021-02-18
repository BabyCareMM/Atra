import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router';

//user
export async function Login(user) {
    // const [data, setData] = useState('');
    await axios.get(`http://localhost:3000/login/${user.email}/${user.password}`).then(
        res => {
            if (res) {
                alert('Login res ' + JSON.stringify(res.data));
                // <Redirect to={{ pathname: '/post', state: { flash: 'logged in succeded!' } }} />
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
    await axios.post('http://localhost:3000/createAccount', user).then(res => {
            alert('create works');
            alert('creatAccount res ' + JSON.stringify(res.data));
            // < Redirect to={{ pathname: '/post', state: { flash: 'created account successfully!' } }} />
        })
        .catch((err) => {
            alert('err in createAccount')
        })
}
