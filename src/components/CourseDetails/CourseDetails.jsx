import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import HeaderText from '../HeaderText/HeaderText';
import { HiOutlineDownload, HiStar } from 'react-icons/hi';

import ReactToPdf from 'react-to-pdf';
import { useContext } from 'react';
import { NavBarOpenContext } from '../../contexts/UseContext';
const ref = React.createRef();

const CourseDetails = () => {
    const { navBarY } = useContext(NavBarOpenContext);
    const { totalParts, totalWeeks, totalLessons, name, imgURL, course } = JSON.parse(useLoaderData());
    return (
        <div className='h-full sm:relative'>
            <div className={`transition-all duration-500 sm:sticky ${navBarY === 'top-0' ? 'sm:top-24' : 'sm:top-4'}`}>
                <div className='flex justify-center items-center'>
                    <HeaderText text={<b className='text-3xl'>Courses</b>} />
                </div>
                <div ref={ref} className='mt-10 flex justify-center items-center'>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <span></span>
                        <div className="card shadow-2xl shadow-[#0009] bg-neutral hover:bg-neutral">
                            <figure><img className='w-full' src={imgURL} alt={name} /></figure>
                            <div className="card-body py-8 px-7">
                                <h2 className="card-title justify-center">{course}. {name}</h2>
                                <hr />
                                <p>Total Parts : <span className='font-extrabold text-orange-500'>{totalParts}</span></p>
                                <p>Total Lessons : <span className='font-extrabold text-orange-500'>{totalLessons}</span></p>
                                <p>Course Duration : <span className='font-extrabold text-orange-500'>{totalWeeks} weeks</span></p>
                                <hr />
                            </div>
                        </div>
                        <span></span>
                    </div>
                </div>
                <div className='mt-10 flex justify-center items-center gap-4'>
                    <ReactToPdf targetRef={ref} filename={`${course}-${name}.pdf`}>
                        {({ toPdf }) => (
                            <button className='btn btn-sm btn-outline' onClick={toPdf}>Save pdf&nbsp;&nbsp;<HiOutlineDownload className='text-lg text-indigo-500' /></button>
                        )}
                    </ReactToPdf>
                    <Link to='/checkout' className='btn btn-sm btn-outline'>Get Premium Access&nbsp;&nbsp;<HiStar className='text-lg text-orange-400' /></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;