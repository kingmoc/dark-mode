import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = () => {
    const [ isDark, setIsDark] = useLocalStorage('DarkMode')

    useEffect(() => {

        isDark ? 
        document.body.classList.add('dark-mode')
        : 
        document.body.classList.remove('dark-mode')

    },[isDark])

    return [isDark, setIsDark]

}