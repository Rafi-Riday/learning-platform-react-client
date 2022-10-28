import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import HeaderText from '../HeaderText/HeaderText';

const Course = () => {
    const courseData = JSON.parse(useLoaderData());
    return (
        <div className='col-span-4 sm:col-span-2 lg:col-span-3'>
            <div className='flex justify-center items-center'>
                <HeaderText text={<b className='text-3xl'>Courses</b>} />
            </div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    courseData?.map(c => <CourseCard key={c.course} data={{ ...c }} />)
                }
            </div>
        </div>
    );
};

export default Course;