import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import LoginForm from './login.form';
import '../../../css/login.css';

export class LoginComponent extends Component {

    submitForm = values => {
        this.props.doLoginWithEmail(values);
    }

    render() {
        return (
            <div className="login-container">
                <div className="app-details-container">

                </div>
                <div className="login-form-container">
                    <LoginForm onSubmit={this.submitForm}></LoginForm>
                    <div className="login-form-footer">
                        <span className="login-link-span">Don't have an account? <Link className="login-link" to={{ pathname: "/signup", hash: "#" }}>Signup now</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
