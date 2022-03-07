import React from 'react';
import SimpleExample from '../SimpleExample/SimpleExample';
import './SimpleExampleStyled.css';
import ExampleMessage from '../../Components/ExampleMessage/ExampleMessage';
import { SimpleExampleStyledMessage } from '../Constants/SimpleExampleStyled'

const SimpleExampleStyled = () => (<><ExampleMessage text={SimpleExampleStyledMessage} /><SimpleExample showExampleMessage={false} /></>)

export default SimpleExampleStyled;