import React from 'react';
import { useRouteError } from "react-router-dom";
import SadLogo from '../../img/sad.png';
import Footer from '../Footer';
import HeaderText from '../HeaderText';
import NavBar from '../NavBar';

const ErrorPage = () => {
    document.title = 'Learn CSE | Fetch Error';
    const error = useRouteError();
    error && console.error(error);
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar />
            <div className='grow flex flex-col items-center justify-center mt-24 mb-10'>
                <div className='w-full flex flex-col items-center justify-center gap-6'>
                    <img className='w-20' src={SadLogo} alt="Sad Logo" />
                    <div className='text-center'>
                        <HeaderText text={<b className='text-2xl font-extrabold'>Sorry</b>} />
                        <br />
                        <b>An unexpected error has occurred.</b>
                        <p>
                            <i className='font-thin'>Error : {error?.statusText || error?.message || 'Data not found'}</i>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
};

export default ErrorPage;