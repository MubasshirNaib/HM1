import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
// import AuthProvider from './providers/AuthProvider.jsx';
import myRoutes from './routes/myRoutes.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './providers/AuthProvider.jsx';
//import AuthProvider from './providers/AuthProvider.jsx';
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={myRoutes} />
        </AuthProvider>
      </QueryClientProvider>
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>
);
