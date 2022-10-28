import { createBrowserRouter, redirect } from "react-router-dom";
import CourseLayout from "../layouts/CourseLayout";
import MainLayout from "../layouts/MainLayout";
import Blog from "../components/Blog/Blog";
import Course from "../components/Course/Course";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '*',
        element: <PageNotFound />,
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
        loader: () => fetch('https://10-learning-platform-assignment-server.vercel.app/course'),
      },
    ],
  },
]);

export default router;