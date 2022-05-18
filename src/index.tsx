import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { theme } from './theme/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
