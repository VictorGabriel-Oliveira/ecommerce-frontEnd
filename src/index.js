import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/auth';
import {  CartProvider } from './contexts/cart';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


