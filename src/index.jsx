import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <React.ErrorBoundary>
            <App type="Markdown" />
        </React.ErrorBoundary>
    </React.StrictMode>
);