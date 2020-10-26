import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


import { CHANGE_LOADING_SP, CHANGE_PRESENT_STATUS } from '../Actions/Types';
import Description from '../Components/SingleProtest/Description';
import Updates from '../Components/SingleProtest/Updates';


const SingleProtest = () => {

    const [user, setUser] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [protest, setProtest] = useState(null);
    const [signup, setSignup] = useState(false);
    const [updates, setUpdates] = useState(null);
    const [present, setPresent] = useState(localStorage.getItem('present') || false);
    const [status, setStatus] = useState("");
    const [sCount, setsCount] = useState(0);
    const [pCount, setpCount] = useState(0);
    const [error, setError] = useState(false);


    const loading = useSelector(state => state.loading);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { protestId } = useParams();

    useEffect(() => {
        //get single Protest
        setError(false);
        fetch('http://localhost:5000/protest/singleProtest/' + protestId, {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        })
            .then(res => {
                return res.json();
            })
            .then(resData => {
                if (resData.status === 500) {
                    return setError(true);
                }
                setProtest(resData.protest);
                setSignup(resData.signedup);
                setAdmin(resData.admin);
                setUser(resData.user);
                setPresent(resData.present);
                setStatus(resData.status);
                setUpdates(resData.protestupdates);
                setsCount(resData.protest.signedupUser.length);
                setpCount(resData.protest.presentUser.length);
                dispatch({ type: CHANGE_LOADING_SP });
            })
            .catch(err => {
                console.log(err);
                setError(true);
                dispatch({ type: CHANGE_LOADING_SP });

            });

    }, []);

    const changeSignup = (val) => {
        setSignup(val);
        setsCount(sCount + 1);
        fetch('http://localhost:5000/protest/signup/' + protestId, {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        })
            .then(res => {

            })
            .catch(err => {
                setError(true);
            });

    };

    const changePresent = (val) => {
        if (!signup) {
            setSignup(true);
            fetch('http://localhost:5000/protest/signup/' + protestId, {
                headers: {
                    Authorization: 'Bearer ' + auth.token
                }
            })
                .then(res => {
                    setsCount(sCount + 1);
                })
                .catch(err => {
                    setError(true);
                });


        }
        setPresent(true);
        fetch('http://localhost:5000/protest/present/' + protestId, {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        })
            .then(res => {
                localStorage.setItem('protestId', protestId);
                localStorage.setItem('present', true);
                dispatch({
                    type: CHANGE_PRESENT_STATUS,
                    payload: {
                        present: true,
                        protestId: protestId
                    }
                });
                setpCount(pCount + 1);

            })
            .catch(err => {
                setError(true);
            });

    };




    return (
        <div>

            {loading.singleProtestLoading ? (

                <div style={{ marginLeft: '43%', marginTop: '17%' }} className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            ) :

                <Fragment>
                    {
                        error ?
                            (<h1>Server Down Try Refreshing or comeback after sometime</h1>) :
                            <div>

                                <Description
                                    protest={protest}
                                    signup={signup}
                                    status={status}
                                    present={present}
                                    sCount={sCount}
                                    pCount={pCount}
                                    user={user}
                                    changeSignup={changeSignup}
                                    changePresent={changePresent}
                                />

                                {(signup || status === 'Closed') ?

                                    <Updates
                                        updates={updates}
                                        protestId={protestId}
                                        user={user}
                                        admin={admin}
                                    /> :
                                    (protest !== null) ? <h5 className="container center">Signup to get Updates</h5> : <div></div>
                                }
                            </div>
                    }
                </Fragment>

            }



        </div>
    );
};

export default SingleProtest;
