import React, { useEffect, useState } from 'react';
import { errorToast } from '../utilities/toasts';
import CollapseCourse from './collapse/CollapseCourse';
import HeaderText from './HeaderText';

const SideBar = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch('https://10-learning-platform-assignment-server.vercel.app/course/')
            .then(res => res.json())
            .then(data => setCourseData(data))
            .catch(err => {
                errorToast(<b>Fetching Unsuccessful</b>, 5000);
            })
    }, []);
    return (
        <div className={`transition-all duration-500 flex flex-col gap-6`}>
            <div className='flex flex-row justify-center items-center'>
                <br />
                <br />
                <HeaderText text={<b className='text-lg'>Course Guide</b>} />
            </div>
            <div className='flex flex-col gap-4'>
                {
                    courseData?.map(c => <CollapseCourse key={c.course} data={{ ...c }} />)
                }
            </div>
        </div >
    );
};

export default SideBar;