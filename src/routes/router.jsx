import { createBrowserRouter, redirect } from "react-router-dom";
import Blog from "../components/Blog";
import CheckOut from "../components/CheckOut";
import Content from "../components/Content";
import Course from "../components/Course";
import CourseDetails from "../components/CourseDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PageNotFound from "../components/ErrorPage/PageNotFound";
import FAQ from "../components/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../components/Profile";
import TermsAndConditions from "../components/TermsAndConditions";
import CourseLayout from "../layouts/CourseLayout";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: <Login />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/checkout',
        element: <PrivateRoute><CheckOut /></PrivateRoute>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>,
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/course',
        element: <Course />,
        loader: () => fetch('https://10-learning-platform-assignment-server.vercel.app/course-minified'),
      },
      {
        path: '/course/:course',
        element: <CourseDetails />,
        loader: ({ params }) => fetch(`https://10-learning-platform-assignment-server.vercel.app/course/${params.course}`),
      },
      {
        path: '/course/:course/part/:part/lesson/:lesson',
        element: <PrivateRoute><Content /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://10-learning-platform-assignment-server.vercel.app/course/${params.course}/part/${params.part}/lesson/${params.lesson}`),
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;