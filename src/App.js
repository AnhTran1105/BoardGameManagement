import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import { useStore } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loginData'));
    const [state] = useStore();

    useEffect(() => {
        const loginData = state.loginData;
        if (loginData) {
            setIsLoggedIn(true);
        }
    }, [state.loginData]);

    return (
        <Router>
            <Routes>
                {!isLoggedIn ? (
                    <Route path="/" element={<Login />} />
                ) : (
                    <Route path="*" element={<Home />} />
                )}
                <Route path="sign-up" element={<SignUp />} />
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;
