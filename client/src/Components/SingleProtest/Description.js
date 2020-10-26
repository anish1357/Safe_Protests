import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import Mapper from "../AllProtest/map";
//import { CHANGE_LOADING_DESC } from '../../Actions/Types';


const Description = (props) => {
    //Single Protest


    useEffect(() => {
        //effect

        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }, []);
    const auth = useSelector(state => state.auth);
    const [email, setemail] = useState('');


    const mailHandler = (e) => {
        e.preventDefault();
        //console.log(email);
        fetch('http://localhost:5000/protest/admin/' + props.protest._id, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
            .then(res => {
                if (res.status == 200 || res.status === 201) {

                    return alert('Email added');
                }
                throw new Error;
            })
            .catch(err => {
                alert('email not registered or server error');
            });
    };

    return (
        <Fragment>

            {
                props.protest !== null ? <Fragment>


                    <div id={`protest/${props.protest._id}#modal1`} className="modal">
                        <div className="modal-content">
                            <h4>Add email</h4>
                            <div class="row">
                                <form onSubmit={mailHandler} className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input
                                                name="email"
                                                type="email"
                                                className="validate"
                                                onChange={e => { setemail(e.target.value); }}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <a href="#!" className="modal-close waves-effect waves-red btn-flat">Close</a>

                                        <button type="submit" className="modal-close waves-effect waves-green btn-flat">Submit</button>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                    <div className="row" style={{ paddingTop: '5%' }}>
                        <div className="col s12 offset-m2 m8">
                            <div className="card blue-grey darken-1 center" >
                                <div className="card-content white-text center">
                                    {props.user && (

                                        <div className=" right">
                                            <Link to="#modal1" className="modal-trigger" style={{ color: 'white' }}>+ Add Admin</Link>
                                        </div>
                                    )}
                                    <span className="card-title"><h1>{props.protest.title}</h1>
                                    </span>
                                    <p>{props.protest.description}</p>
                                    <br />
                                    <p>{props.protest.organisation}   |   SignupCount-{props.sCount}  |  PresentCount-{props.pCount}</p><br />
                                    <p>Start-Time:{props.protest.startTime}</p><br />
                                    <p>End-Time:{props.protest.endTime}</p>
                                    <br></br>
                                    <Mapper loc={props.protest.location} />
                                </div>

                                <div className="card-action">
                                    {(props.signup || props.status === 'Closed') ?
                                        <Link onClick={(e) => e.preventDefault()} style={{ cursor: 'default', color: 'grey' }}>Thanks for Signing Up!</Link> :

                                        <Link onClick={() => { props.changeSignup(true); }}>Signup</Link>
                                    }

                                    {!props.present && (
                                        <Fragment>

                                            {
                                                props.status === 'Active' ?
                                                    <Link onClick={() => { props.changePresent(true); }}>Mark yourself Present</Link> :
                                                    <Link onClick={(e) => e.preventDefault()} style={{ cursor: 'default', color: 'grey' }}>
                                                        {props.status}
                                                    </Link>
                                            }

                                        </Fragment>

                                    )


                                    }




                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>

                    : <div></div>
            }
        </Fragment>

    );
};

export default Description;
