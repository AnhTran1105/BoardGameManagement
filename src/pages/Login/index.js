import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useStore, actions } from '~/store';
import axios from '~/utils/axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [, dispatch] = useStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await login(email, password);
        if (data && !data.error) {
            setSuccess(true);
            dispatch(actions.setLoggedIn(true));
            dispatch(actions.setLoginData(data));
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/authenticate', {
                email: email,
                password: password,
            });
            return response;
        } catch (error) {
            setError(true);
            return null;
        }
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
                    {error && (
                        <p className="error-message">
                            Email or password is incorrect.
                            <i className="icon" style={{ marginRight: '0px' }}>
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    className="octicon octicon-x"
                                >
                                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                </svg>
                            </i>
                        </p>
                    )}
                    {success && (
                        <p className="success-message">
                            Logged in successfully!
                            <i className="icon" style={{ marginRight: '0px' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    id="check"
                                >
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path>
                                </svg>
                            </i>
                        </p>
                    )}
                    <div className="auth-form-body">
                        <form acceptCharset="UTF-8" method="post" onSubmit={handleLogin}>
                            <label htmlFor="login_field">
                                Email <span className="is-required"></span>
                            </label>
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
                                <label htmlFor="password">
                                    Password <span className="is-required"></span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control input-block js-password-field"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError(false);
                                    }}
                                />

                                <button
                                    className="btn btn-primary btn-block js-sign-in-button"
                                    type="submit"
                                >
                                    Log in
                                </button>
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
