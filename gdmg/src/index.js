import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Mail from './pages/Mail';
import Analytics from './pages/Analytics';
import { Calendar } from '@mantine/dates';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ColorSchemeProvider>
        <App />
      </ColorSchemeProvider>
    </MantineProvider>
    <Routes>
      <Route path='/' />
      <Route path='/register' />
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/mail' element={<Mail/>}/>
      <Route path='/analytics' element={<Analytics />}/>
      <Route path='calendar' element={<Calendar />}/>
    </Routes>
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
