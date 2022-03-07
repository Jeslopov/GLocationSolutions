import React from 'react';
import './ExampleContainer.css';

const ExampleContainer = ({children, ...otherProps}) => {
    return <div className="example-container" {...otherProps}>
        {children}
    </div>   
}

export default ExampleContainer;