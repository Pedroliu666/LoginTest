import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is already logged in
        const isLoggedIn = localStorage.getItem('token'); // Assuming token is stored in localStorage
        if (isLoggedIn) {
            navigate('/already-logged-in');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register/', formData);
            if (response.data) 
            {
                setMessage('Registration successful!');

                setTimeout(() => {
                    navigate('/login'); // Redirect to login page after 1 second
                }, 1000);
            }
        } catch (error)
        {
            setMessage('Registration failed' + error.message);
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5'
    };

    const formContainerStyle = {
        backgroundColor: '#e6f7ff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%'
    };

    const headingStyle = {
        marginBottom: '20px',
        color: '#333'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        color: '#555'
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '4px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer'
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3'
    };

    const messageStyle = {
        marginTop: '10px',
        color: 'red'
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h2 style={headingStyle}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={labelStyle}>Username:</label>
                        <input type="text" name="username" onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Password:</label>
                        <input type="password" name="password" onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Email:</label>
                        <input type="text" name="email" onChange={handleChange} style={inputStyle} />
                    </div>
                    <button type="submit" style={buttonStyle}>Register</button>
                </form>
                {message && <p style={messageStyle}>{message}</p>}
            </div>
        </div>
    );
};

export default Register;