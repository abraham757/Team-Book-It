import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
    return (
        <div>
        <p style={styles.p}>
            Share your thoughts! Leave a review and discover what others are saying about your favorite books!
        </p>
        </div>
    );
    };

    const styles = {
        p: {
        fontSize: '40px',
        fontWeight: 'bold',
        }
    };
export default Description;