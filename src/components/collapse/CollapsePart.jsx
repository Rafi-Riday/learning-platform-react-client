import React, { useContext } from 'react';
import { FaLock, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';

const CollapsePart = ({ course, partData }) => {
    const { user } = useContext(AuthContext);
    const { part, lessons } = partData;
    return (
        <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title font-bold bg-primary">
                Part {part}
            </div>
            <div
                className="transition-all duration-200 delay-[0ms] p-0 pl-3 peer-checked:pb-0 collapse-content md:text-base">
                {
                    lessons?.map(l => <Link to={`/course/${course}/part/${part}/lesson/${l.lesson}`} key={`${course}-${part}-${l.lesson}`} className='block p-4 bg-neutral'><u className='flex items-center justify-start gap-1'>{user?.uid ? <FaStar className='text-orange-400' /> : <FaLock className='text-error' />}{`${l.lesson}. ${l.name}`}</u></Link>)
                }
            </div>
        </div>
    );
};

export default CollapsePart;