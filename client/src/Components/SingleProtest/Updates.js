import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styles from './Updates.module.css';
import { Link } from 'react-router-dom';


const Updates = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [update, setUpdate] = useState("");
    const [errorMessage, setError] = useState("");

    const auth = useSelector(state => state.auth);

    const updateHandler = (e) => {

        e.preventDefault();
        //console.log(title, update);
        setError("");
        fetch('http://localhost:5000/protest/addUpdate/' + props.protestId, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: update
            })
        })
            .then(res => {
                if (res.status === 500) {
                    return setError("server error occured try again");
                }
                setShowForm(false);
                setTitle("");
                setUpdate("");
                if (!props.admin)
                    alert('Update to be verified');

            })
            .catch(err => {
                setShowForm(false);
                setError("server Error occured try again");
            });


    };

    return (

        <Fragment>
            {props.updates !== null ?
                <div>
                    <div className="container" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                        <h4 style={{ textAlign: 'center' }}>Updates</h4>
                        {!showForm && (
                            <hr></hr>
                        )}
                        {!showForm && (
                            <div className="center" style={{ marginBottom: '2%' }}>
                                <Link onClick={() => setShowForm(true)} style={{ alignItems: 'center' }} ><button className={styles.btn}>+ Add</button></Link>
                                {
                                    (props.admin || props.user) && (

                                        <Link to={`/verify/${props.protestId}`} ><button className={styles.btnc}>Verify</button></Link>
                                    )
                                }
                            </div>
                        )}


                        {errorMessage && (
                            <h6 className="container center">{errorMessage}</h6>
                        )}
                        {showForm && (
                            <form onSubmit={updateHandler} className="col s12 m8 l6 offset-m3 offset-l3">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            name="title"
                                            type="text"
                                            className="validate"
                                            onChange={e => {
                                                setTitle(e.target.value);
                                            }}
                                            value={title}
                                        />
                                        <label>Title</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea
                                            name="Update"
                                            className="materialize-textarea"
                                            onChange={e => {
                                                setUpdate(e.target.value);
                                            }}
                                            value={update}
                                        ></textarea>
                                        <label>Add Update</label>
                                    </div>
                                </div>
                                <button className={styles.btn} type="submit" >Update</button>
                                <button className={styles.btnc} onClick={e => setShowForm(false)} >Close</button>

                            </form>
                        )}
                    </div>
                    {props.updates.map(upd => {
                        return (
                            <React.Fragment>
                                <div className="container" style={{ paddingLeft: '5%', paddingRight: '5%', boxShadow: '0px 0px 1px', border: '1px solid white' }}>
                                    <br></br>
                                    <h6 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: 'center' }}>{upd.title}</h6>
                                    <p style={{ textAlign: 'center' }}>{upd.description}</p>
                                    <br></br>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                : <div></div>
            }


        </Fragment>
    );
};

export default Updates;
