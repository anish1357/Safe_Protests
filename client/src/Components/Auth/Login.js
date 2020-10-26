import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CHANGE_LOGIN_STATUS } from '../../Actions/Types';
import styles from './Login.module.css';


const Login = () => {

    //TODO error handling display

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let formEnabled = true;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const location = useLocation();
    // {
    //     if (location.state.from) {
    //         setLoginMessage("Login to continue or Signup");
    //     }
    // }
    const prevPath = location.state ? location.state.from : '/';

    const dispatch = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();

        if (!formEnabled) return;

        formEnabled = false;
        setEmailErr(false);
        setPasswordErr(false);
        setErrorMessage("");

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_id: email,
                password: password
            })
        })
            .then(res => {
                if (res.status === 404) {
                    setEmailErr(true);
                    formEnabled = (true);
                    setErrorMessage("EMAIL DOES NOT EXIST");

                }
                else if (res.status === 401) {
                    setPasswordErr(true);
                    formEnabled = true;
                    setErrorMessage("PASSWORD INCORRECT");

                }
                else if (res.status === 402) {
                    formEnabled = true;
                    setErrorMessage("NOT PERMITTED");
                }

                else if (res.status === 400) {
                    formEnabled = true;
                    setErrorMessage("error while validating");
                }
                else if (res.status === 500) {
                    formEnabled = true;
                    setErrorMessage("SERVER ERROR");
                }
                return res.json();

            })
            .then(resData => {
                if (formEnabled) return;
                dispatch({
                    type: CHANGE_LOGIN_STATUS,
                    payload: {
                        isAuth: true,
                        token: resData.token,
                        userId: resData.userId,
                        userName: resData.username
                    }
                });
                localStorage.setItem('token', resData.token);
                localStorage.setItem('isAuth', true);
                localStorage.setItem('userId', resData.userId);
                localStorage.setItem('userName', resData.username);
                history.replace(prevPath);

            })
            .catch(err => {
                formEnabled = true;
                console.log(err);
                dispatch({
                    type: CHANGE_LOGIN_STATUS,
                    payload: {
                        isAuth: false,
                        token: null,
                        userId: null,
                        userName: ''
                    }
                });
            });

    };

    return (
        <div className="container-fluid center">
            <div className="row" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <h1>Login</h1>
                <form onSubmit={e => { loginHandler(e); }} className="col s12 m8 l6 offset-m3 offset-l3">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                name="email"
                                type="email"
                                className="validate"
                                onChange={e => {
                                    setEmail(e.target.value);
                                    setEmailErr(false);
                                }}
                                value={email}
                            />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                name="password"
                                type="password"
                                className="validate"
                                onChange={e => {
                                    setPassword(e.target.value);
                                    setPasswordErr(false);
                                }}
                                value={password}
                            />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <button disabled={!formEnabled} type="submit" className={styles.btn}>Login</button>

                </form>
            </div>
            {errorMessage && (

                <h6>{errorMessage}</h6>
            )}

            {(prevPath !== '/') && (
                <h6 style={{ paddingTop: '2%' }}>Login/Signup to continue</h6>
            )}
        </div>
    );
};

export default Login;
