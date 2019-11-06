import React from 'react';

export const gridTheme = {
    breakpoints: { // defaults below
        xl: 1366,
        lg: 992,
        md: 768,
        sm: 0,
        xs: 0
    },
    row: {
        padding: 16, // default 15
    },
    col: {
        padding: 12,
    },
    container: {
        padding: 48, // default 15
        maxWidth: { // defaults below
            xl: 800,
            lg: 800,
            md: 720,
            sm: 540,
            xs: 540,
        },
    },
};

export const styledTheme = {
    mainColor: 'purple',
}