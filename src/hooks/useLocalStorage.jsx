import React, { useEffect, useState } from 'react';

const UseLocalStorage = (key,initialValue) => {
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;
    const [value, setvalue] = useState(storedValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
   
    return [value,setvalue];
}

export default UseLocalStorage;
