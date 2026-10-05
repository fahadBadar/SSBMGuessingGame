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
        setValue(currentValue => {
            let resolvedValue;

            if (typeof newValue === 'function') {
                resolvedValue = newValue(currentValue);
            } else {
                resolvedValue = newValue;
            }

            localStorage.setItem(key, JSON.stringify(resolvedValue));

            return resolvedValue;
        });
    }
    return [value, setSaveDataValue];
}