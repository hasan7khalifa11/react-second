import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        
        <App />
        
    </div>
);

