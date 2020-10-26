import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';


const Protest = () => {


    //Protest info
    const [protests, setProtests] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Getting info about all protests
        fetch('http://localhost:5000/all-protests')
            .then(res => {
                setLoading(false);
                return res.json();
            })
            .then(resData => {
                setProtests(resData.protests);
            })
            .catch(err => {
                //error in retrieving data

            });


    }, []);



    //TODO add pagination
    return (
        <Fragment>

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
                (
                    <div>
                        <br></br>
                        <h4 className="container center" style={{ margin: "3% auto", fontFamily: "sans-serif" }}>Raise Your Voice And Spread Awareness</h4>
                        {protests.map(protest => {

                            return (
                                <div key={protest._id} className="row">

                                    <div className="col s12 offset-m3 m6">
                                        <div className="card blue-grey darken-1" style={{ backgroundColor: "#0a2640" }} >
                                            <div className="card-content white-text">
                                                <span className="card-title" style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "200%" }} >{protest.title}</span>
                                                <p>{protest.description}</p>
                                            </div>
                                            <div className="card-action">
                                                <Link to={`/protest/${protest._id}`} >Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
        </Fragment>


    );
};

export default Protest;
