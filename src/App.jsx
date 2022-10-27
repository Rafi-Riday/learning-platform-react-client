import React from "react";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/routes/PrivateRoute";
import MainLayout from "./layouts/MainLayout";
import Orders from './components/Orders/Orders';
import Course from "./components/Course/Course";
import CourseLayout from "./layouts/CourseLayout";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          loader: () => redirect('/home'),
        },
        {
          path: '/home',
          element: <PrivateRoute><Home /></PrivateRoute>,
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders /></PrivateRoute>,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />
        },
      ],
    },
    {
      path: '/course',
      element: <CourseLayout />,
      children: [
        {
          path: '/course',
          element: <Course />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
