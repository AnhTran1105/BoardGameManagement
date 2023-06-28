import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useState, useEffect } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loginDataJSON = localStorage.getItem('loginData');
        const loginData = JSON.parse(loginDataJSON);
        if (loginData) {
            setIsLoggedIn(true);
        }
    }, []);

    console.log(localStorage);

    return (
        <Router>
            <Routes>
                {!isLoggedIn ? <Route path="/" element={<Login />} /> : ''}
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
