import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Project_page from './Page/Project_Page/project_page.jsx';
import Work_page from './Page/Work_Page/work_page.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/Project-Page',
    element: <Project_page />
  },

  {
    path: '/Work-Page',
    element: <Work_page />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
