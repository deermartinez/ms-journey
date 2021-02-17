import React from 'react';
import '../Styles/button.css';
import {Link} from 'react-router-dom';



const STYLES = ['btn-primary', 'btn-outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = StyLES.includes(buttonStyle) ?
    buttonStyle : STYLES[0]

};