import React from 'react';
import Styles from './Input.module.css'

const Input = ({ value, onChange, type = 'text', ...props }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                boxSizing: 'border-box'
            }}
            {...props}
        />
    );
};

export default Input;