import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from "react";
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
