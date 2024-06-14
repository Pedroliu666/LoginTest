import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#007bff',
        padding: '10px',
        color: 'white',
        textAlign: 'center',
        fontsize: '30px',
    };


    return (
        <header style={headerStyle}>
            Hosstinn
        </header>
    );
};

export default Header;