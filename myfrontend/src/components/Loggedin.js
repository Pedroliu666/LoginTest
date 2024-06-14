import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlreadyLoggedIn = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username'); // Retrieve username

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username'); // Remove username

        navigate('/login');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
                <h2 style={{ marginBottom: '20px', color: '#333' }}>
                    {username} are already logged in
                </h2>
                <button onClick={handleLogout} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', color: 'white', fontSize: '16px', cursor: 'pointer' }}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AlreadyLoggedIn;