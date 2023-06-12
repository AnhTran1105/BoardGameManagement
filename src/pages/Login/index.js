import React, { useState } from 'react';
import { login } from '../../api-service/authservice/authservice';
import { NavLink } from 'react-router-dom';
import { useStore, actions } from '~/store';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, dispatch] = useStore();

    const handleLogin = (e) => {
        e.preventDefault();
        const data = login(email, password);
        dispatch(actions.setLoginData(data));
    };

    return (
        <div className="app-layout">
            <main className="main-page">
                <div className="auth-form">
                    <div className="auth-form-logo">
                        <img src={require('../../static/images/logo-fit.png')} alt="" />
                    </div>
                    <div className="auth-form-header">
                        <h3>Sign in to</h3>
                        <h1>Board Game Management</h1>
                    </div>
                    <div className="auth-form-body">
                        <form acceptCharset="UTF-8" method="post" onSubmit={handleLogin}>
                            <label htmlFor="login_field">Email</label>
                            <input
                                type="text"
                                name="login"
                                id="login_field"
                                className="form-control form-control input-block js-password-field"
                                autoCapitalize="off"
                                autoCorrect="off"
                                autoComplete="username"
                                autoFocus="autofocus"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control input-block js-password-field"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive
                                            ? 'is-active app-navbar-link'
                                            : 'app-navbar-link'
                                    }
                                    to="/"
                                >
                                    <button
                                        className="btn btn-primary btn-block js-sign-in-button"
                                        type="submit"
                                    >
                                        Log in
                                    </button>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                    <p className="login-callout">
                        New to <b>Board Game Management</b>?
                        <br />
                        <a href="/sign-up">Create an account.</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Login;
