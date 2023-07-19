import { useState } from 'react';
import axios from '~/utils/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
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
            validationErrors.email = 'Please fill out email field.';
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Email is not valid.';
        }

        if (!formData.name.firstName) {
            validationErrors.firstName = 'Please fill out first name field.';
        }

        if (!formData.name.lastName) {
            validationErrors.lastName = 'Please fill out last name field.';
        }

        if (!formData.phoneNumber) {
            validationErrors.phoneNumber = 'Please fill out this field.';
        } else if (!isValidPhoneNumber(formData.phoneNumber)) {
            validationErrors.phoneNumber = 'Phone number is not valid.';
        }

        if (!formData.password) {
            validationErrors.password = 'Please fill out this field.';
        } else if (!isValidPassword(formData.password)) {
            validationErrors.password =
                'Password must contain uppercase, lowercase letter and number.';
        }

        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match.';
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
            );
        }
    };

    const register = async (email, password, name, phoneNumber, gender, birthday, address) => {
        try {
            const response = await axios
                .post('/auth/register', {
                    email: email,
                    password: password,
                    name: name,
                    phoneNumber: phoneNumber,
                    gender: gender,
                    birthday: birthday,
                    address: address,
                })
                .then((response) => {
                    if (response.message === 'Registered successfully.') {
                        toast.success('Registered successfully!', {
                            position: toast.POSITION.TOP_CENTER,
                            hideProgressBar: true,
                        });
                        const timeout = setTimeout(navigate('/'), 2000);
                        clearTimeout(timeout);
                    } else {
                        console.log(response);
                    }
                });
            return response;
        } catch (error) {
            if (
                error.response.data.message ===
                'could not execute statement; SQL [n/a]; constraint [uk_jvf7qotkd9nf1sn3sokwnfiv4]'
            ) {
                toast.error('Phone number already exists!', {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                });
            } else {
                console.error(error);
            }
            return null;
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

    const isValidPassword = (password) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /\d/;

        return (
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            numberRegex.test(password)
        );
    };

    return (
        <div className="app-layout">
            <main className="main-page">
                <div className="auth-form center large">
                    <div className="auth-form-header">
                        <h1>Create an account</h1>
                    </div>
                    {errors.email && (
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
                            </i>
                        </p>
                    )}
                    {errors.firstName && (
                        <p className="error-message">
                            {errors.firstName}
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
                            </i>
                        </p>
                    )}
                    {errors.lastName && (
                        <p className="error-message">
                            {errors.lastName}
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
                            </i>
                        </p>
                    )}

                    {errors.phoneNumber && (
                        <p className="error-message">
                            {errors.phoneNumber}
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
                            </i>
                        </p>
                    )}
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
                                    </label>
                                    <input
                                        className="form-control form-control input-block"
                                        name="lastName"
                                        type="text"
                                        value={formData.name.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="two-inputs">
                                <div>
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
                                </div>
                                <div>
                                    <label htmlFor="birthday">Birthday</label>
                                    <input
                                        className="form-control input-block"
                                        name="birthday"
                                        type="date"
                                        value={formData.birthday}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="two-inputs">
                                <div>
                                    <label htmlFor="phoneNumber">
                                        Phone number <span className="is-required"></span>
                                    </label>
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
                                </div>
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        className="form-control input-block"
                                        name="address"
                                        type="text"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <label htmlFor="password">
                                Password <span className="is-required"></span>
                            </label>
                            <input
                                className="form-control input-block"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <p className="error-message">
                                    {errors.password}
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
                                    </i>
                                </p>
                            )}

                            <label htmlFor="confirmPassword">
                                Confirm password <span className="is-required"></span>
                            </label>
                            <input
                                className="form-control input-block"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && (
                                <p className="error-message">
                                    {errors.confirmPassword}
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
                                    </i>
                                </p>
                            )}

                            <button
                                className="btn btn-primary btn-block js-sign-in-button"
                                type="submit"
                            >
                                Create an account
                            </button>
                        </form>
                    </div>
                    <p className="login-callout">
                        Already have an account? <a href="/">Login</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default SignUp;
