import React from 'react';
import { useRouteError } from "react-router-dom";
import HeaderText from '../HeaderText/HeaderText';
import SadLogo from '../../img/sad.png';

const ErrorPage = () => {
    document.title = 'Buzz Quizzers | Fetch Error';
    const error = useRouteError();
    error && console.error(error);
    return (
        <div className='w-full flex flex-col items-center justify-center gap-6'>
            <img className='w-20' src={SadLogo} alt="Sad Logo" />
            <div className='text-center'>
                <HeaderText text={<b className='text-2xl font-extrabold'>Sorry</b>} />
                <br />
                <b>An unexpected error has occurred.</b>
                <p>
                    <i className='font-thin'>Fetch Error : {error?.statusText || error?.message || 'Data not found'}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;