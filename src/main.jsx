import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from "react";
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './components/provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
