import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (

    <div className="box-layout__box">
        <div>
            <h1>Expensify App</h1>
            <p className="">It's time to get your expenses under control.</p>
            <button onClick={startLogin}>Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

