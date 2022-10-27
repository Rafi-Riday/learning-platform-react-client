import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-900 p-6 flex flex-col justify-center items-center'>
            <h3 className='text-center text-lg font-extrabold pt-2 pb-8'><span className='border-y-white border-y-2 text-white'>Edu CSE <span className='text-orange-300'>!!</span></span></h3>
            <p className='text-sm text-slate-300'>&#169; Copyright - 2022</p>
        </div>
    );
};

export default Footer;