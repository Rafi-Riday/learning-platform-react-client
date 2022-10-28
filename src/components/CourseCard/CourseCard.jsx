import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const CourseCard = ({ data }) => {
    const { course, name, imgURL } = data;
    return (
        <div>
            <div className="card w-full min-h-[21.5rem] shadow-2xl shadow-[#0009] bg-neutral hover:bg-neutral">
                <figure><img className='w-full' src={imgURL} alt={name} /></figure>
                <div className="card-body py-8 px-7">
                    <h2 className="card-title justify-center">{course}. {name}</h2>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;