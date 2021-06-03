import React, { createContext } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    switchTheme: (theme) => {}
})

export default ThemeContext;