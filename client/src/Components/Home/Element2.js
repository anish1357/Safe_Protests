import React from 'react';
import styles from './Element2.module.css';
import posts from '../../Images/posts.svg';
import candidate from '../../Images/candidate.svg';
import updates from '../../Images/updates.svg';


const Element2 = () => {
    //TODO change heading
    return (
        <div className="container-fluid center" >
            <br />
            <br />

            <h1 className={styles.h1}>Safe Protests.</h1><br />
            <h1 className={styles.h1}>For the Rights but Safely</h1>
            <br />
            <br />
            <div className="row" style={{ padding: '4%' }}>
                <div className="col s12 m4 l4">
                    {/* <svg style={{ height: '75px', width: '30%' }} className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg> */}
                    <img src={candidate} alt="posts" style={{ height: '100px', width: '40%' }} />
                    <p className={styles.p}>Voice your Opinion!</p>
                </div>
                <div className="col s12 m4 l4">
                    {/* <svg style={{ height: '75px', width: '30%' }} className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"></path></svg> */}
                    <img src={updates} alt="posts" style={{ height: '100px', width: '40%' }} />
                    <p className={styles.p}>Get Updates about protests!</p>
                </div>
                <div className="col s12 m4 l4">
                    {/* <svg style={{ height: '75px', width: '30%' }} className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path></svg> */}
                    <img src={posts} alt="posts" style={{ height: '100px', width: '40%' }} />
                    <p className={styles.p}>Contact for Help!</p>
                </div>
            </div>
            <button className={styles.btn}> Create Protest </button>
            <br />
            <br />
        </div>
    );
};

export default Element2;
