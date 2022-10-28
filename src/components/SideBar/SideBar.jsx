import React, { useContext, useEffect, useState } from 'react';
import { NavBarOpenContext } from '../../contexts/UseContext';
import { errorToast } from '../../utilities/toasts';
import CollapseCourse from '../collapse/CollapseCourse';
import HeaderText from '../HeaderText/HeaderText';

const SideBar = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch('https://10-learning-platform-assignment-server.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourseData(data))
            .catch(err => {
                errorToast(<b>Fetching Unsuccessful</b>, 5000);
            })
    }, []);
    const { navBarY } = useContext(NavBarOpenContext);
    return (
        <div className={`transition-all duration-500 sm:sticky ${navBarY === 'top-0' ? 'sm:top-24' : 'sm:top-6'} flex flex-col gap-4`}>
            <div className='flex flex-row justify-center items-center mt-5'>
                <HeaderText text={<b className='text-lg'>Course Guid</b>} />
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