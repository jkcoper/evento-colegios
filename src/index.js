import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/App.css';
import './assets/css/footer.css';
import './assets/css/topbar.css';
import './assets/css/contenthv.css';
import './assets/css/contentbottom.css';
import './assets/css/content.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
