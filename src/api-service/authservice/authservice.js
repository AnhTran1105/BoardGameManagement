import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export const login = async (email, password) => {
    const response = await axios
        .post(API_URL + "authenticate", {
            email,
            password,
        });
    alert(response.data.message);
    window.location.href = 'https://hoangvu75-ubiquitous-space-disco-5p7rrr9gq4jcj5w-3000.preview.app.github.dev/dashboard';
    return response.data;
};

export const register = async (email, password, name, phoneNumber, gender, birthday, address) => {
    const response = await axios
        .post(API_URL + "register", {
            email,
            password,
            name,
            phoneNumber,
            gender,
            birthday,
            address
        });
    alert(response.data.message);
    window.location.href = 'https://hoangvu75-ubiquitous-space-disco-5p7rrr9gq4jcj5w-3000.preview.app.github.dev/login';
    return response.data;
};
