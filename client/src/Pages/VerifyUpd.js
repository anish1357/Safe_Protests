import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const VerifyUpd = () => {

    const { protestId } = useParams();
    const auth = useSelector(state => state.auth);
    const [update, setupdate] = useState([]);
    const [error, seterror] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //get all the pending requests

        fetch('http://localhost:5000/update/pending/' + protestId, {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        })
            .then(res => {
                if (res.status == 200 || res.status === 201) {
                    return res.json();
                }
                throw new Error;

            })
            .then(resData => {
                setLoading(false);
                seterror(false);
                setupdate(resData.pending);
                console.log(update);

            })
            .catch(err => {
                setLoading(false);
                seterror(true);
            });

    }, []);

    const verifyHandler = (id) => {
        fetch('http://localhost:5000/update/verify/' + id, {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        }
        ).then(res => {
            if (res.status == 200 || res.status === 201) {
                return res.json();
            }
            throw new Error;

        })
            .then(resData => {
                setLoading(false);
                seterror(false);
                setupdate(update.filter(upd => upd._id !== id));
            })
            .catch(err => {
                setLoading(false);
                seterror(true);
            });
    };

    const igHandler = (id) => {
        fetch('http://localhost:5000/update/ignore/' + id, {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        }
        ).then(res => {
            if (res.status == 200 || res.status === 201) {
                return res.json();
            }
            throw new Error;

        })
            .then(resData => {
                setLoading(false);
                seterror(false);
                setupdate(update.filter(upd => upd._id !== id));
            })
            .catch(err => {
                setLoading(false);
                seterror(true);
            });

    };

    const reportHandler = (id) => {
        fetch('http://localhost:5000/update/block/' + id, {
            headers: {
                Authorization: 'Bearer ' + auth.token
            }
        }
        ).then(res => {
            if (res.status == 200 || res.status === 201) {
                return res.json();
            }
            throw new Error;

        })
            .then(resData => {
                setLoading(false);
                seterror(false);
                setupdate(update.filter(upd => upd._id !== id));
            })
            .catch(err => {
                setLoading(false);
                seterror(true);
            });

    };

    return (
        <div>
            {loading ? (
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
                    {error ? (
                        <h1>Server Error</h1>
                    ) :
                        <div className="container center">
                            <h4>Verify Updates</h4>
                            {
                                update.map(upd => {
                                    return (
                                        <div class="row">
                                            <div class="col s12 m12 l12 ">
                                                <div class="card darken-1">
                                                    <div class="card-content">
                                                        <span class="card-title">{upd.title}</span>
                                                        <p>{upd.description}</p>
                                                    </div>
                                                    <div class="card-action">
                                                        <button onClick={() => verifyHandler(upd._id)} className="btn-small" style={{ margin: '2px' }}>Verify</button>
                                                        <button onClick={() => igHandler(upd._id)} className="btn-small grey" style={{ margin: '2px' }}>Ignore</button>
                                                        <button onClick={() => reportHandler(upd._id)} className="btn-small red" style={{ margin: '2px' }}>Report</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div>
                    }
                </Fragment>}
        </div>
    );
};

export default VerifyUpd;
