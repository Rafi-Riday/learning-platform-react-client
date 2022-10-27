import React from 'react';
import { Outlet } from 'react-router-dom';
import Toast from '../components/Toast/Toast';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <div className='grow flex flex-col items-center justify-center mt-20 mb-3'>
                <Outlet />
            </div>
            <Footer />
            <Toast />
        </div>
    );
};

export default MainLayout;