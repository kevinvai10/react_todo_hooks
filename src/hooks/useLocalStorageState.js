import { useState, useEffect } from 'react'

function useLocalStorageState (key, defaultVal) {
    //make piece of state based off of value in local storage
    const [state, setState] = useState(() => {
        let val;

        try{
            JSON.parse(localStorage.getItem(key)) || String(defaultVal)
        } catch {
            val = defaultVal;
        }
        return val;
    });
    // use effect to update localstorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])
    
    return [state, setState];
}

export default useLocalStorageState;