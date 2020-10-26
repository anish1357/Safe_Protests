import React from 'react';
import Binary from "../../Images/Binary.jpg";
import styles from './Element3.module.css';

const Element3 = () => {
    return (
        <div>
            <br />
            <div className="container-fluid">
                <div style={{ marginBottom: '0' }} className={`row ${styles.x}`}>
                    <div className="col s12 m6 l6">
                        <h2 className={styles.h2}>For You And For Your Rights! </h2>
                        <p className={styles.p}>We want people to keep fighting for the right. We want people to be safe. So we merge the two and bring you this! A safer way to carry on your fight against the wrong with greater real-time accessibilities and collaborative work. </p>
                    </div>
                    <div className="col s12 m6 l6">
                        <img className="fit" src={Binary} alt="Element3" style={{ marginLeft: '30px', marginTop: '18%' }} />

                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0a2640" fillOpacity="1" d="M0,224L1440,64L1440,0L0,0Z"></path></svg>

            </div>
        </div>
    );
};

export default Element3;
