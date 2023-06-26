import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { useStore } from './store';
import { useState, useEffect } from 'react';

function App() {
    const [state] = useStore();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        if (state.loggedIn) {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', isLoggedIn);
            setFirstLoad(false);
        }
    }, [state.loggedIn, isLoggedIn]);

    console.log(localStorage);
    // useEffect(() => {
    //     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // }, [])

    return (
        <Router>
            <Routes>
                {firstLoad && !isLoggedIn ? <Route path="/" element={<Login />} /> : ''}
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
