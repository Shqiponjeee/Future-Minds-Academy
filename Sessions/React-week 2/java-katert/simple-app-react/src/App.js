import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import '../assets/css/fma-general.css';
// import '../assets/css/fma-responsive.css';
// import '../assets/css/style.css';

import Summer from './pages/Summer';
import Spring from './pages/Spring';
import Fall from './pages/Fall';
import Winter from './pages/Winter';



const router = createBrowserRouter([
  { path: '/summer', element: <Summer /> },
  { path: '/', element: <Spring /> },
  { path: '/fall', element: <Fall /> },
  { path: '/winter', element: <Winter /> },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


