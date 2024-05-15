import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App.tsx'
import CityPage from './components/CityPage/CityPage.tsx'
import { FilterContextProvider } from './context/Filter.tsx'
import './index.css'
import { loader as cityLoader } from './loader/cityloader.ts'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: '/:city', element: < CityPage />, loader: cityLoader }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilterContextProvider>
      <RouterProvider router={router} />
    </FilterContextProvider>
  </React.StrictMode>,
)
