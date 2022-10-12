import React, { useState, useEffect } from 'react';

export const Counter = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => { 
       const intervalId = setInterval(() => {
        setNumber(number + 1)
       }, 1000);
       return () => {
            clearInterval(intervalId);
       }
    }, [number]);
    

    return (
        <div>
            <p>Current number: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Increase</button>
            <button onClick={() => setNumber(number - 1)}>Decrase</button>
        </div>
    );
}