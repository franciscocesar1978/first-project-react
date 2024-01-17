import React from 'react';
import createRoot from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle';


createRoot.render(
    <>
        <App /> <GlobalStyle />
    </>,

    document.getElementById('root')
);

