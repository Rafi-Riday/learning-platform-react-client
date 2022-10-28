import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { NavBarOpenContext } from '../../contexts/UseContext';
import HeaderText from '../HeaderText/HeaderText';
import { HiOutlineDownload } from "react-icons/hi";

import ReactToPdf from 'react-to-pdf';
const ref = React.createRef();

const Content = () => {
    const { navBarY } = useContext(NavBarOpenContext);
    const lessonDetails = JSON.parse(useLoaderData());
    const { name, video, date } = lessonDetails;
    document.title = `Learn CSE | ${name}`;
    return (
        <>
            <div ref={ref} className={`transition-all duration-300 fixed sm:sticky ${navBarY === 'top-0' ? 'top-16' : 'top-0'} left-0 flex flex-col items-center gap-4 z-10 bg-base-100 pt-8 border-b-4 sm:border-b-0`}>
                <HeaderText text={<h2 className={`text-xl px-8`}>Lecture : {name}</h2>} />
                <span><code>Recorded on {date}</code></span>
                <span className='px-6'>Video URL : <Link to={video}>{video}</Link></span>
                <ReactToPdf targetRef={ref} filename={`${name}-${date}.pdf`}>
                    {({ toPdf }) => (
                        <button className='btn btn-sm btn-outline' onClick={toPdf}>Save pdf&nbsp;&nbsp;<HiOutlineDownload className='text-lg text-indigo-500' /></button>
                    )}
                </ReactToPdf>
                <video className='border sm:rounded-xl' width="100%" controls >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='mt-64'></div>
        </>
    );
};

export default Content;