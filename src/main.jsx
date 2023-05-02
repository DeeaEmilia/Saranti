import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <StateContext>
                <Layout>
                    <Toaster />
                    <App />
                </Layout>
            </StateContext>
        </BrowserRouter>
    </React.StrictMode>
);
