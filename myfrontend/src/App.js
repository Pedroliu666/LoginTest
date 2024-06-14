import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AlreadyLoggedIn from './components/Loggedin';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/already-logged-in" element={<AlreadyLoggedIn />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;