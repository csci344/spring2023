import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {getAccessToken} from './utils';

const initPage = async () => {
    console.log("init page...");
    const token = await getAccessToken('webdev', 'password');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            {/* Note: because we're using strict mode, 
                the App's constructor will be run twice.
                Don't be alarmed1
            */}
            <App accessToken={token} />
        </React.StrictMode>
    );
}

initPage();
