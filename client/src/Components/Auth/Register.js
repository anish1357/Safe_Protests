import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import styles from './Register.module.css';
import { useHistory } from 'react-router-dom';


const Register = () => {
    const [name, setUsername] = useState();
    const [email_id, setEmail] = useState();
    const [password, setPassword] = useState();
    const [number, setNumber] = useState();
    const history = useHistory();

    const signUpDetails = { name, email_id, password, number };

    useEffect(() => {
        //effect
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/signup', {
            method: "POST",
            body: JSON.stringify(signUpDetails),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            history.replace('/login');
        });

    };
    return (
        <div className="container-fluid center">
            <div className="row" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit}
                    className="col s12 m8 l6 offset-m3 offset-l3">
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="name" type="text" value={name || ''} onChange={(e) => setUsername(e.target.value)} required className="validate" />
                            <label htmlFor="name">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" type="email" value={email_id || ''} onChange={(e) => setEmail(e.target.value)} required className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="password" type="password" value={password || ''} onChange={(e) => setPassword(e.target.value)} required className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="number" type="text" value={number || ''} onChange={(e) => setNumber(e.target.value)} required className="validate" />
                            <label htmlFor="number">Phone number</label>
                        </div>
                    </div>

                    <button className={styles.btn}>Register</button>

                </form>
            </div>
        </div>
    );
};

export default Register;
