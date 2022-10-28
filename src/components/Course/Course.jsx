import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Course = () => {
    const courseData = JSON.parse(useLoaderData());
    return (
        <div className='col-span-4 sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                courseData?.map(c => <CourseCard key={c.course} data={{ ...c }} />)
            }
        </div>
    );
};

export default Course;