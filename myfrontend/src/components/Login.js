import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is already logged in
        const isLoggedIn = localStorage.getItem('token'); 
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
            const response = await axios.post('http://localhost:8000/api/login/', formData);
            if (response.data.success) {
                localStorage.setItem('token', response.data.token); // Store token
                localStorage.setItem('username', formData.username); // Store username
                setMessage('Login successful!');

                setTimeout(() => {
                    navigate('/already-logged-in'); // Redirect to login page after 1 second
                }, 1000);
                

            } else {
                setMessage('Invalid credentials.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage('Invalid credentials.');
            } else {
                setMessage('Login failed: ' + error.message);
            }
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
        backgroundColor: '#ffffff',
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

    const linkStyle = {
        marginTop: '10px',
        display: 'block',
        textAlign: 'center',
        color: '#007bff',
        textDecoration: 'none'
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h2 style={headingStyle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label style={labelStyle}>Username:</label>
                        <input type="text" name="username" onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Password:</label>
                        <input type="password" name="password" onChange={handleChange} style={inputStyle} />
                    </div>
                    <button type="submit" style={buttonStyle}>Login</button>
                </form>
                {message && <p style={messageStyle}>{message}</p>}

                <Link to="/Register" style={linkStyle}>Don't have an account? Register</Link>
            </div>
        </div>
    );
};

export default Login;