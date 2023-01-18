import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import HeaderText from './HeaderText';

const Course = () => {
    document.title = 'Learn CSE | Course';
    const courseData = JSON.parse(useLoaderData());
    return (
        <>
            <div className='flex justify-center items-center'>
                <HeaderText text={<b className='text-3xl'>Courses</b>} />
            </div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    courseData?.map(c => <CourseCard key={c.course} data={{ ...c }} />)
                }
            </div>
            <div className='mt-10 flex justify-center items-center gap-4'>
                <Link to='/checkout' className='btn btn-sm btn-outline'>Get Premium Access&nbsp;<HiStar className='text-lg text-orange-400' /></Link>
            </div>
        </>
    );
};

export default Course;