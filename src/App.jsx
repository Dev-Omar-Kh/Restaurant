import React from 'react'
import Header from './Components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([

  {path : '/' , element : <Header />}

])

export default function App() {

  return <React.Fragment>

    <RouterProvider router={routes} />

  </React.Fragment>

}
