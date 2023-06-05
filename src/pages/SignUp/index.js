import { useState } from 'react';
import { register } from '~/api-service/authservice/authservice';

function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: { firstName: '', lastName: '' },
        phoneNumber: '',
        gender: '',
        birthday: '',
        address: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstName' || name === 'lastName') {
            setFormData((prevData) => ({
                ...prevData,
                name: {
                    ...prevData.name,
                    [name]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Reset error message for the field
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        const validationErrors = {};

        if (!formData.email) {
            validationErrors.email = 'Vui lòng nhập email.';
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Email không hợp lệ.';
        }

        if (!formData.name.firstName) {
            validationErrors.firstName = 'Vui lòng nhập tên.';
        }

        if (!formData.name.lastName) {
            validationErrors.lastName = 'Vui lòng nhập họ.';
        }

        if (!formData.phoneNumber) {
            validationErrors.phoneNumber = 'Vui lòng nhập số điện thoại.';
        } else if (!isValidPhoneNumber(formData.phoneNumber)) {
            validationErrors.phoneNumber = 'Số điện thoại không hợp lệ.';
        }

        // Check for other fields and validation rules

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Submit the form
            console.log(formData);

            register(
                formData.email,
                formData.password,
                formData.name,
                formData.phoneNumber,
                formData.gender,
                formData.birthday,
                formData.address,
            )
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    return (
        <div className="app-layout">
            <main className="main-page">
                <div className="auth-form center large">
                    <div className="auth-form-header">
                        <h1>Đăng kí tài khoản</h1>
                    </div>
                    <div className="auth-form-body">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                Email <span className="is-required"></span>
                            </label>
                            <input
                                className="form-control input-block"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {!errors.email && (
                                <p className="error-message">
                                    {errors.email}
                                    <i className="icon">
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
                                    </i>{' '}
                                </p>
                            )}
                            <div className="name-input">
                                <div>
                                    <label htmlFor="firstName">
                                        First name <span className="is-required"></span>
                                    </label>
                                    <input
                                        className="form-control form-control input-block"
                                        name="firstName"
                                        type="text"
                                        value={formData.name.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName">
                                        Last name <span className="is-required"></span>
                                        <input
                                            className="form-control form-control input-block"
                                            name="lastName"
                                            type="text"
                                            value={formData.name.lastName}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input
                                className="form-control form-control input-block"
                                autoCapitalize="off"
                                autoCorrect="off"
                                autoComplete="username"
                                autoFocus="autofocus"
                                name="phoneNumber"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            {errors.phoneNumber && (
                                <p className="error-message">{errors.phoneNumber}</p>
                            )}
                            <label htmlFor="gender">
                                Gender
                                <div className="custom-select">
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        style={{ width: '100%' }}
                                        required
                                        className="form-control input-block"
                                    >
                                        <option value="">-- Select gender --</option>
                                        <option value="MALE">Male</option>
                                        <option value="FEMALE">Female</option>
                                    </select>
                                    <div className="select-arrow"></div>
                                </div>
                            </label>
                            <label htmlFor="birthday">Birthday</label>
                            <input
                                className="form-control input-block"
                                name="birthday"
                                type="date"
                                value={formData.birthday}
                                onChange={handleChange}
                            />
                            <label htmlFor="address">Address</label>
                            <input
                                className="form-control input-block"
                                name="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <label htmlFor="password">
                                Mật khẩu <span className="is-required"></span>
                            </label>
                            <input
                                className="form-control input-block"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                className="btn btn-primary btn-block js-sign-in-button"
                                type="submit"
                            >
                                Đăng kí
                            </button>
                        </form>
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
