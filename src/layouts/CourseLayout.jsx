import React from 'react';
import { Outlet } from 'react-router-dom';
import Toast from '../components/Toast/Toast';
import Header from '../components/Header/Header';

const CourseLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Toast />
        </div>
    );
};

export default CourseLayout;