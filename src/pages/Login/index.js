import React, { useState } from 'react';
import { login } from '../../api-service/authservice/authservice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="app-layout">
            <main className="main-page">
                <div className="auth-form">
                    <div className="auth-form-header">
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className="auth-form-body">
                        <form acceptCharset="UTF-8" method="post" onSubmit={handleLogin}>
                            <label htmlFor="login_field">Tên người dùng hoặc email</label>
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
                                <label htmlFor="password">Mật khẩu</label>
                                <a className="forgot-password" href="/password-reset">
                                    Quên mật khẩu?
                                </a>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control input-block js-password-field"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className="btn btn-primary btn-block js-sign-in-button"
                                    type="submit"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="login-callout">
                        Chưa có tài khoản? <a href="/sign-up">Đăng kí</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Login;
