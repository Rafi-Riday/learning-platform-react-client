import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Toast from '../components/Toast';
const SideBar = React.lazy(() => import('../components/SideBar'));

const CourseLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <div className='grow flex flex-col items-center justify-center mt-24 mb-10'>
                <div className='grid grid-cols-12 px-4 gap-4'>
                    <div className='col-span-12 sm:col-span-8 lg:col-span-9 relative'>
                        <Outlet />
                    </div>
                    <aside className='sm:mt-0 col-span-12 sm:col-span-4 lg:col-span-3'>
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