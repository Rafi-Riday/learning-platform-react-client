import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import HeaderText from './HeaderText';

import { useContext } from 'react';
import { NavBarOpenContext } from '../contexts/UseContext';

const CourseDetails = () => {
    const { navBarY } = useContext(NavBarOpenContext);
    const { totalParts, totalLessons, name, imgURL, course } = JSON.parse(useLoaderData());
    document.title = `Learn CSE | ${name}`;
    return (
        <div className='h-full sm:relative'>
            <div className={`transition-all duration-500 sm:sticky ${navBarY === 'top-0' ? 'sm:top-24' : 'sm:top-4'}`}>
                <div className='flex justify-center items-center'>
                    <HeaderText text={<b className='text-3xl'>Courses</b>} />
                </div>
                <div className='mt-10 flex justify-center items-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <span></span>
                        <div className="card shadow-2xl shadow-[#0009] bg-neutral hover:bg-neutral">
                            <figure><img className='w-full' src={imgURL} alt={name} /></figure>
                            <div className="card-body py-8 px-7">
                                <h2 className="card-title justify-center">{course}. {name}</h2>
                                <hr />
                                <p>Total Parts : <span className='font-extrabold text-orange-500'>{totalParts}</span></p>
                                <p>Total Lessons : <span className='font-extrabold text-orange-500'>{totalLessons}</span></p>
                                <hr />
                            </div>
                        </div>
                        <span></span>
                    </div>
                </div>
                <div className='mt-10 flex justify-center items-center gap-4'>
                    <Link to='/checkout' className='btn btn-sm btn-outline'>Get Premium Access&nbsp;&nbsp;<HiStar className='text-lg text-orange-400' /></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;