import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Toast from '../components/Toast';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <div className='grow flex flex-col items-center mt-24 mb-10'>
                <Outlet />
            </div>
            <Footer />
            <Toast />
        </div>
    );
};

export default MainLayout;