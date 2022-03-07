
import React, { useRef, useState, useEffect, useCallback } from 'react';
import ExampleContainer from '../../Components/ExampleContainer/ExampleContainer';
import ExampleMessage from '../../Components/ExampleMessage/ExampleMessage';
import Input from '../../Components/Input/Input';
import { SimpleExampleMessage } from '../Constants/SimpleExample'

const SimpleExample = ({
    showExampleMessage = true
}) => {
    const locationInputRef = useRef();
    const [inputValue, setInputValue] = useState();

    const setUpGoogle = useCallback(() => {
        if (
            window.google &&
            window.google.maps &&
            locationInputRef?.current
        ) {
            const element = locationInputRef.current;
            const autocomplete = new window.google.maps.places.Autocomplete(
                element,
                {
                    types: ['(regions)'],
                    componentRestrictions:{},
                }
            );

            autocomplete.setFields([
                'address_components',
                'formatted_address',
                'geometry',
            ]);

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                const value = place.formatted_address;
                setInputValue(value);
            });
        }
    }, [
        
    ]);

    const loadGoogleScript = useCallback(() => {
        const script = document.createElement('script');
        script.onload = () => {
            setUpGoogle();
        };
        script.src = `https://maps.googleapis.com/maps/api/js?v=3.47.6&key=AIzaSyBFts9V0cwwsvKe6JdP8VcD9FLuYp5iWxU&libraries=places`;
        document.head.appendChild(script);
    }, [setUpGoogle]);

    useEffect(() => {
        if (!window.google && !window._googleMapsStartedLoading) {
            window._googleMapsStartedLoading = true;
            loadGoogleScript();
        } else {
            setUpGoogle();
        }
    }, [loadGoogleScript, setUpGoogle]);

    

    return <ExampleContainer>
        {showExampleMessage && <ExampleMessage text={SimpleExampleMessage} />}
        <Input ref={locationInputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    </ExampleContainer>
}

export default SimpleExample;