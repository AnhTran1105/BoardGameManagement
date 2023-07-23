import axios from 'axios';

const instance = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL_API}${process.env.REACT_APP_PATH_API}`,
    baseURL: 'https://hoangvu75-crispy-lamp-jwp777g569q2547p-8080.preview.app.github.dev/api',
});

// custom response
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default instance;
