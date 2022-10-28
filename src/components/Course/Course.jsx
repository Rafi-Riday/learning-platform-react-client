import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import HeaderText from '../HeaderText/HeaderText';
import { HiOutlineDownload, HiStar } from 'react-icons/hi';

import ReactToPdf from 'react-to-pdf';
const ref = React.createRef();

const Course = () => {
    const courseData = JSON.parse(useLoaderData());
    return (
        <>
            <div className='flex justify-center items-center'>
                <HeaderText text={<b className='text-3xl'>Courses</b>} />
            </div>
            <div ref={ref} className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    courseData?.map(c => <CourseCard key={c.course} data={{ ...c }} />)
                }
            </div>
            <div className='mt-10 flex justify-center items-center gap-4'>
                <ReactToPdf targetRef={ref} filename={`learn-cse-course.pdf`}>
                    {({ toPdf }) => (
                        <button className='btn btn-sm btn-outline' onClick={toPdf}>Save pdf&nbsp;&nbsp;<HiOutlineDownload className='text-lg text-indigo-500' /></button>
                    )}
                </ReactToPdf>
                <button className='btn btn-sm btn-outline'>Get Premium Access&nbsp;&nbsp;<HiStar className='text-lg text-orange-400' /></button>
            </div>
        </>
    );
};

export default Course;