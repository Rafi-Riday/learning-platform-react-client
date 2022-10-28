import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Toast from '../components/Toast/Toast';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
const SideBar = React.lazy(() => import('../components/SideBar/SideBar'));

const CourseLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <div className='grow flex flex-col items-center justify-center mt-24 mb-10'>
                <div className='grid grid-cols-4 px-4 gap-4'>
                    <Outlet />
                    <aside className='mt-64 sm:mt-0 col-span-4 sm:col-span-2 lg:col-span-1'>
                        <Suspense fallback={<div></div>}>
                            <SideBar />
                        </Suspense>
                    </aside>
                </div>
            </div>
            <Footer />
            <Toast />
        </div>
    );
};

export default CourseLayout;