import { useState } from 'react'

export function useSaveGameData(key, defaultValue) {
    function getInitalValue() {
        if (localStorage.getItem(key) === null) {
            return defaultValue;
        } else
        {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    const[value, setValue] = useState(getInitalValue)

    function setSaveDataValue(newValue) {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }
    return [value, setSaveDataValue];
}