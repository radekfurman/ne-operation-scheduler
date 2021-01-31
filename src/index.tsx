import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './store/reducers/root';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import thunk from 'redux-thunk';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#00C9FF',
            main: '#0961BD',
            dark: '#00C9FF',
        },
        // secondary: {
        //     light: '#0961BD',
        //     main: '#00C9FF',
        //     dark: '#124191',
        // },
        secondary: {
            light: '#EDF2F5',
            main: '#BEC8D2',
            dark: '#98A2AE',
        },
        action: {
            active: '#00A1CC',
            hover: '#8EE6FF',
            selected: '#31C4F3',
            focus: '00A1CC',
        },
    },
});

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </Provider>,

    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
