import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>Book It</h1>
        </header>
    );
}

const styles = {
    header: {
        textAlign: 'center',
        fontSize: '24px',
    }
};

export default Header;