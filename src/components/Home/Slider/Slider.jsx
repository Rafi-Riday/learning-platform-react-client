import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './Slider.css';
import { Link } from 'react-router-dom';
import { errorToast } from '../../../utilities/toasts';
import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const [courseData, setCourseData] = useState([])
    useEffect(() => {
        fetch(`https://10-learning-platform-assignment-server.vercel.app/course-minified`)
            .then(res => res.json())
            .then(data => setCourseData(data))
            .catch(err => {
                errorToast(<b>Failed to Fetch Data</b>, 2000);
            })
    }, []);
    return (
        <>
            <AutoplaySlider
                className='aws-btn'
                organic-arrow-thickness='20px'
                animation="cubeAnimation"
                play={true}
                cancelOnInteraction={false}
                interval={5000}
            >
                {courseData.map(c => <div className='w-full h-full overflow-hidden rounded-xl' key={c.course}>
                    <div className="mt-2 card w-full h-full bg-base-100 shadow-xl image-full">
                        <figure className='h-full'><img className='w-full h-full' src={c.imgURL} alt={c.name} /></figure>
                        <div className="card-body bg-[#0004] h-full justify-evenly items-center">
                            <h2 className="card-title text-white text-center rounded-xl p-2 justify-center text-lg sm:text-3xl">
                                <span>
                                    Course Serial : {c.course}<br />
                                    Name : <span className='text-orange-300'>{c.name}</span>
                                </span>
                            </h2>
                            <div className="card-actions">
                                <Link to={`/course/${c.course}`} className="btn btn-sm text-xs btn-accent">Visit Course&nbsp;&nbsp;<FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>)}
            </AutoplaySlider>
        </>
    );
};

export default Slider;
