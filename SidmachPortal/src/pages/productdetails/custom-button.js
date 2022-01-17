import React from 'react';

import './custom-button.css'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    // this is to dynamically customize the button class e.g if inverted is true then add the inverted class
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;