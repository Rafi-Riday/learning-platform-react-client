import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { NavBarOpenContext } from '../../contexts/UseContext';
import HeaderText from '../HeaderText/HeaderText';

const Content = () => {
    const { navBarY } = useContext(NavBarOpenContext);
    const lessonDetails = JSON.parse(useLoaderData());
    return (
        <div className='col-span-4 sm:col-span-2 lg:col-span-3 relative'>
            <div className={`transition-all duration-300 fixed sm:sticky ${navBarY === 'top-0' ? 'top-16' : 'top-0'} left-0 flex flex-col items-center gap-4 z-10 bg-base-100 pt-8 border-b-4 sm:border-b-0`}>
                <HeaderText text={<h2 className={`text-xl`}>Lesson : {lessonDetails.name}</h2>} />
                <video className='border' width="100%" controls >
                    <source src={lessonDetails.video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Content;