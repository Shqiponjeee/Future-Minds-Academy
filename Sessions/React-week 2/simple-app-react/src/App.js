import React from 'react';
im

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Fall from './pages/Fall';
import Summer from './pages/Summer';
import Spring from './pages/Spring';
import Winter from './pages/Winter';

const router = createBrowserRouter([
  { path: '/summer', element: <Summer /> },
  { path: '/fall', element: <Fall /> },
  { path: '/spring', element: <Spring /> },
  { path: '/winter', element: <Winter /> }

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


