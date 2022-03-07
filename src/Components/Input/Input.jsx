import React, { forwardRef } from "react";
import './Input.css';

const Input = forwardRef(({children, ...otherProps}, ref) => {
    return <input ref={ref} className="input" {...otherProps}>{children}</input>
});

export default Input;