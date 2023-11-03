import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './route';
import './assets/style.css';

const domContainer = document.getElementById('root') as HTMLElement

createRoot(domContainer).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)