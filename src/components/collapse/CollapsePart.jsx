import React, { useEffect, useState } from 'react';
import { errorToast } from '../../utilities/toasts';
import CollapseWeek from './CollapseWeek';

const CollapsePart = ({ course, part }) => {
    const [weekData, setWeekData] = useState({});
    useEffect(() => {
        fetch(`https://10-learning-platform-assignment-server.vercel.app/course/${course}/part/${part}`)
            .then(res => res.json())
            .then(data => setWeekData(data))
            .catch(err => {
                errorToast(<b>Fetching Unsuccessful</b>, 5000);
            })
    }, []);
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
                    weekData?.weeks?.map(w => <CollapseWeek key={w} course={course} part={part} week={w} />)
                }
            </div>
        </div>
    );
};

export default CollapsePart;