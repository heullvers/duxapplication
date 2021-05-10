import React from 'react';
import './index.css';

const STYLES= ['btn--primary', 'btn--outline', 'btn--sex'];
const SIZES = ['btn--medium', 'btn--large', 'btn--sex-size'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};