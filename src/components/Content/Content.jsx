import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { NavBarOpenContext } from '../../contexts/UseContext';
import HeaderText from '../HeaderText/HeaderText';
import { HiOutlineDownload } from "react-icons/hi";
import { FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ReactToPdf from 'react-to-pdf';
import { useState } from 'react';
const ref = React.createRef();

const Content = () => {
    const { navBarY } = useContext(NavBarOpenContext);
    const lessonDetails = JSON.parse(useLoaderData());
    const { name, video, date } = lessonDetails;
    document.title = `Learn CSE | ${name}`;
    const [copyMsg, setCopyMsg] = useState('Copy');
    return (
        <>
            <div ref={ref} className={`transition-all duration-[400ms] fixed sm:sticky ${navBarY === 'top-0' ? 'top-16 pt-4' : 'top-0 sm:top-6'} left-0 flex flex-col items-center sm:gap-4 z-10 bg-base-100`}>
                <video className={`sm:rounded-xl`} width="100%" controls >
                    <source src={video} type="video/mp4" />
                </video>
                <div className="collapse collapse-arrow w-full">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title font-bold bg-base-300">
                        Details
                    </div>
                    <div
                        className="transition-all duration-200 delay-[0ms] p-0 pl-3 peer-checked:border-t-2 peer-checked:py-4 collapse-content bg-base-300 border-b-2 flex flex-col items-center gap-2">
                        <HeaderText text={<h2 className={`text-xl`}>Lecture : {name}</h2>} />
                        <div><code>Recorded on {date}</code></div>
                        <div className="tooltip tooltip-warning" data-tip={copyMsg}>
                            <CopyToClipboard text={video} onCopy={() => setCopyMsg('Copied')}>
                                <button onMouseLeave={() => setCopyMsg('Copy')} className='btn btn-sm btn-outline flex items-center justify-center'>Copy Video URL&nbsp;&nbsp;<FaRegCopy className='text-orange-400' /></button>
                            </CopyToClipboard>
                        </div>
                        <ReactToPdf targetRef={ref} filename={`${name}-${date}.pdf`}>
                            {({ toPdf }) => (
                                <button className='btn btn-sm btn-outline' onClick={toPdf}>Save pdf&nbsp;&nbsp;<HiOutlineDownload className='text-lg text-indigo-500' /></button>
                            )}
                        </ReactToPdf>
                    </div>
                </div>
            </div>
            <div className='mt-64'></div>
        </>
    );
};

export default Content;