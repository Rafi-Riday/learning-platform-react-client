import React, { Suspense, useContext, useEffect, useState } from 'react';
import { NavBarOpenContext } from '../../contexts/UseContext';
import { errorToast } from '../../utilities/toasts';
const CollapseCourse = React.lazy(() => import('../collapse/CollapseCourse'));
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
    return (
        <div className={`transition-all duration-500 flex flex-col gap-6`}>
            <div className='flex flex-row justify-center items-center mt-0'>
                <HeaderText text={<b className='text-lg'>Course Guid</b>} />
            </div>
            <div className='flex flex-col gap-4'>
                <Suspense fallback={<div></div>}>
                    {
                        courseData?.map(c => <CollapseCourse key={c.course} data={{ ...c }} />)
                    }
                </Suspense>
            </div>
        </div >
    );
};

export default SideBar;