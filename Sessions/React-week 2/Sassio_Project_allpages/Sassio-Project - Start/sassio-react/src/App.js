import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './assets/css/fma-general.css';
import './assets/css/fma-responsive.css';
import './assets/css/style-responsive.css';
import './assets/css/style.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/blog', element: <Blog /> }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


