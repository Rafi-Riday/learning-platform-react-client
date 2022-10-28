import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { errorToast } from '../../utilities/toasts';
import { FaLock, FaStar } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UseContext';
const CollapseLesson = ({ course, part, week, lesson }) => {
    const { user } = useContext(AuthContext);
    const [lessonDetails, setLessonDetails] = useState({});
    useEffect(() => {
        fetch(`https://10-learning-platform-assignment-server.vercel.app/course/${course}/part/${part}/week/${week}/lesson/${lesson}`)
            .then(res => res.json())
            .then(data => setLessonDetails(data))
            .catch(err => {
                errorToast(<b>Fetching Unsuccessful</b>, 5000);
            })
    }, []);
    return (
        <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title font-bold bg-warning text-info-content">
                Lesson {lesson}
            </div>
            <div
                className="transition-all duration-200 delay-[0ms] p-0 pl-3 peer-checked:pb-0 collapse-content md:text-base">
                <Link to={`/course/${course}/part/${part}/week/${week}/lesson/${lesson}`} className='block p-4 bg-neutral'><u className='flex items-center justify-center gap-1'>{user?.uid ? <FaStar className='text-orange-400' /> : <FaLock className='text-error' />}{lessonDetails.name}</u></Link>
            </div>
        </div>
    );
};

export default CollapseLesson;