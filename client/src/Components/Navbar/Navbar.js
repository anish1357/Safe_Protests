import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

import { CHANGE_LOGIN_STATUS } from '../../Actions/Types';
import styles from './Navbar.module.css';



const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuth, token, present, protestId } = useSelector(state => state.auth);
    //const token = useSelector(state => state.auth.token);


    const userId = useSelector(state => state.auth.userId);
    // const present = localStorage.getItem('present') || false;
    // const protestId = localStorage.getItem('protestId') || null;

    const history = useHistory();
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }, []);
    const helptHndler = () => {
        let latitude;
        let longitude;
        navigator.geolocation.getCurrentPosition(position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            console.log(latitude, longitude);
            fetch('http://localhost:5000/help/twilio/' + protestId,
                {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        latitude: latitude,
                        longitude: longitude
                    })
                })
                .then(res => {
                    alert('Help message sent');
                })
                .catch(err => {
                    console.log(err);
                    alert('error occured');
                });
        });

    };

    const logoutHandler = () => {
        dispatch({
            type: CHANGE_LOGIN_STATUS,
            payload: {
                isAuth: false,
                token: null,
                userId: null,
                userName: ''
            }

        });
        localStorage.removeItem('present');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('token');
        localStorage.removeItem('protestId');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        history.replace('/');
    };
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <a href="/" className="brand-logo" style={{ paddingLeft: '1%' }} ><span style={{ color: 'black', fontSize: '75%', fontFamily: 'sans-serif', textAlign: 'center' }}>Safe Protests</span></a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger "><i className="material-icons"><span style={{ color: 'black' }}>menu</span></i></a>
                    <ul className="right hide-on-med-and-down">
                        {/* Help Button  */}
                        {(isAuth && present) && (
                            <li><Link><button onClick={helptHndler} className={styles.btn}>Help</button></Link> </li>

                        )}

                        <li ><Link to="/know"><span style={{ color: 'black' }}>Know your Rights</span></Link></li>


                        {/* All protests */}
                        <li ><Link to="/all-protests"><span style={{ color: 'black' }}>All Protests</span></Link></li>

                        {/* Signed-up protests */}
                        {isAuth && (

                            <li ><Link to={`/myprotest/${userId}`}><span style={{ color: 'black' }}>My Protests</span></Link></li>

                        )}

                        {/* Login users */}
                        {!isAuth && (

                            <li ><Link to="/login"><span style={{ color: 'black' }}>Login</span></Link></li>
                        )}

                        {/* Sign-up new users */}
                        {!isAuth && (

                            <li ><Link to="/signup"><span style={{ color: 'black' }}>Signup</span></Link></li>
                        )}

                        {/* Register protests */}

                        {isAuth && (

                            <li ><Link to="/createprotest"><span style={{ color: 'black' }}>Create</span></Link></li>
                        )}

                        {/* Logout users */}
                        {isAuth && (

                            <li ><Link onClick={logoutHandler}><span style={{ color: 'black' }}>Logout</span></Link></li>
                        )}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                {(isAuth && present) && (
                    <li><button onClick={helptHndler} className={styles.btn}>Help</button> </li>

                )}
                <li ><Link to="/know"><span style={{ color: 'black' }}>Know your Rights</span></Link></li>

                <li><Link to="/all-protests">All Protests</Link></li>
                {isAuth && (

                    <li ><Link to={`/myprotest/${userId}`}>My Protests</Link></li>
                )}
                {!isAuth && (

                    <li ><Link to="/login">Login</Link></li>
                )}
                {!isAuth && (

                    <li ><Link to="/signup">Signup</Link></li>
                )}
                {isAuth && (

                    <li ><Link to="/createprotest">Create</Link></li>
                )}
                {isAuth && (

                    <li ><Link onClick={logoutHandler} ><span style={{ color: 'black' }}>Logout</span></Link></li>
                )}

            </ul>
        </div>
    );
};

export default Navbar;