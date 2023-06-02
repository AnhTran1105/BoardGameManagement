import { Formik, Field, Form } from 'formik';
function SignUp() {
    return (
        <div className="app-layout">
            <main className="main-page">
                <div className="auth-form">
                    <div className="auth-form-header">
                        <h1>Đăng kí tài khoản</h1>
                    </div>
                    <div className="auth-form-body">
                        <Formik
                            initialValues={{ name: '', email: '' }}
                            onSubmit={async (values) => {
                                await new Promise((resolve) => setTimeout(resolve, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            <Form>
                                <label htmlFor="name">
                                    Tên người dùng <span className="is-required"></span>
                                </label>
                                <Field
                                    className="form-control form-control input-block js-password-field"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    autoComplete="username"
                                    autoFocus="autofocus"
                                    name="name"
                                    type="text"
                                />
                                <label htmlFor="email">
                                    Email <span className="is-required"></span>
                                </label>
                                <Field
                                    className="form-control input-block js-password-field"
                                    name="email"
                                    type="email"
                                />
                                <label htmlFor="password">
                                    Mật khẩu <span className="is-required"></span>
                                </label>
                                <Field
                                    className="form-control input-block js-password-field"
                                    name="password"
                                    type="password"
                                />
                                <label htmlFor="confirm-password">
                                    Xác nhận mật khẩu <span className="is-required"></span>
                                </label>
                                <Field
                                    className="form-control input-block js-password-field"
                                    name="confirm-password"
                                    type="password"
                                />
                                <button
                                    className="btn btn-primary btn-block js-sign-in-button"
                                    type="submit"
                                >
                                    Đăng kí
                                </button>
                            </Form>
                        </Formik>
                    </div>
                    <p className="login-callout">
                        Đã có tài khoản? <a href="/login">Đăng nhập</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default SignUp;
