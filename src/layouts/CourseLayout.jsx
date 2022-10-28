import React from 'react';
import { Outlet } from 'react-router-dom';
import Toast from '../components/Toast/Toast';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import HeaderText from '../components/HeaderText/HeaderText';
import SideBar from '../components/SideBar/SideBar';

const CourseLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <div className='grow flex flex-col items-center justify-center mt-24 mb-10'>
                <HeaderText text={<b className='text-3xl'>Courses</b>} />
                <div className='mt-10 grid grid-cols-4 px-4 gap-4'>
                    <Outlet />
                    <aside className='relative col-span-4 sm:col-span-1'>
                        <SideBar />
                    </aside>
                </div>
            </div>
            <Footer />
            <Toast />
        </div>
    );
};

export default CourseLayout;