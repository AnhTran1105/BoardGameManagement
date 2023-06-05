import axios from "axios";

const API_URL = "https://hoangvu75-zany-space-goggles-94g555x79x937v7w-8080.preview.app.github.dev/api/auth/";

export const login = async (username, password) => {
    const response = await axios
        .post(API_URL + "authenticate", {
            email: username,
            password,
        });
    alert(response.data.message);
    window.location.href = 'https://hoangvu75-ubiquitous-space-disco-5p7rrr9gq4jcj5w-3000.preview.app.github.dev/dashboard';
    return response.data;
};
