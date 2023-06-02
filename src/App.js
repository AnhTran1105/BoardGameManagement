import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Sidebar from './components/layouts/Sidebar';
import Header from './components/layouts/Header';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                    path="/"
                    element={
                        <>
                            <Sidebar />
                            <Header />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
