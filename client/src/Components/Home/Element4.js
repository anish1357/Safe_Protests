import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Binary from "../../Images/Binary1.jpg";
import "./Element4.css";

const Element4 = () => {
    return (
        <div>
            <div className=" Element4 container-fluid row">
                <div className="col s12 l6">
                    <h2 className="Heading4"><span className="title">Keep a check on all the protests.</span><br />All around the globe</h2>
                    <p className="text4">Do not stop supporting the right.Be present as and when possible.Check out all the protests around the world and support the ones your conscience agree with. Keep supporting.It is important.
                </p>
                    <br />
                    <div className="position4">
                        <button className="waves-effect waves-light btn btn4">Explore</button>
                    </div>
                </div>
                <div className="col s12 l6 pull-l1 center">
                    <img className="fit" src={Binary} alt="Element4" />
                </div>
            </div>
        </div>

    );
};


export default Element4;