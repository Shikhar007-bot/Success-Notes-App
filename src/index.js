import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Left from './Components/Left/Left';
import reportWebVitals from './reportWebVitals';
import Mid from './Components/Mid/Mid';
import Notes from './Components/Notes/Notes';
import Notecontainer from './Components/NoteContainer/Notecontainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Left/> */}
    {/* <Mid/> */}
  </React.StrictMode>
);

reportWebVitals();
