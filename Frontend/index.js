import React from 'react';
import {createRoot} from "react-dom/client";
import {StrictMode} from 'react';
import App from './src/App';

console.log("hei hei");
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);