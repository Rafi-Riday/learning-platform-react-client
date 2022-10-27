import React from 'react';
import { Outlet } from 'react-router-dom';
import Toast from '../components/Toast/Toast';

const CourseLayout = () => {
    return (
        <div>
            <Outlet />
            <Toast />
        </div>
    );
};

export default CourseLayout;