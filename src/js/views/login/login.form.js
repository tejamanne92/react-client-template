import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from "redux-form";

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="app-header-panel">
        <div className="app-title">React Template Login</div>
        <div className="app-caption">Login for the React Client Template</div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <Field type="email" className="form-control" id="username" name="username" component="input" />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <Field type="password" className="form-control" id="password" name="password" component="input" />
      </div>
      <button type="submit" className="btn btn-success btn-login">Login</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: "loginForm"
})(LoginForm);

export default LoginForm;
