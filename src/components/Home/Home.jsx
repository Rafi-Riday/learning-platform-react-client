import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Slider from './Slider/Slider';

const Home = () => {
    document.title = 'Learn CSE | Home';
    return (
        <>
            <div className='w-full grid grid-cols-4 px-4 gap-4'>
                <div className='col-span-4 lg:col-span-3'>
                    <div className='grid grid-cols-11'>
                        <span className='col-span-1'></span>
                        <div className='pb-10 h-full col-span-9'>
                            <Slider />
                        </div>
                        <span className='col-span-1'></span>
                    </div>
                    <div className='flex flex-col items-center gap-10 my-10'>
                        <div className="stack">
                            <div className="card shadow-md bg-neutral text-neutral-content">
                                <div className="card-body">
                                    <h2 className="card-title">Learn CSE Online!</h2>
                                    <p> We serve best quality learning platform</p>
                                </div>
                            </div>
                            <div className="card shadow bg-accent text-accent-content">
                                <div className="card-body">
                                </div>
                            </div>
                            <div className="card shadow-sm bg-secondary text-secondary-content">
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                        <div className="card w-full max-w-sm bg-base-300 text-neutral-content shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">It's Possible</h2>
                                <p>We have total <u>124</u> lectures and <u>16</u> assignments.</p>
                                <p>Total course duration is <u>20</u> weeks</p>
                                <div className="card-actions justify-end">
                                    <Link to='/course' className="btn btn-accent border border-slate-800">Start Learning&nbsp;<FaArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className='col-span-4 lg:col-span-1'>
                    <SideBar />
                </aside>
            </div>

        </>
    );
};

export default Home;