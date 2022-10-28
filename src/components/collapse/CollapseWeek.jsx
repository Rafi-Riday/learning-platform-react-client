import React, { useEffect, useState } from 'react';
import { errorToast } from '../../utilities/toasts';
import CollapseLesson from './CollapseLesson';

const CollapseWeek = ({ course, part, week }) => {
    const [lessonData, setLessonData] = useState({});
    useEffect(() => {
        fetch(`https://10-learning-platform-assignment-server.vercel.app/course/${course}/part/${part}/week/${week}`)
            .then(res => res.json())
            .then(data => setLessonData(data))
            .catch(err => {
                errorToast(<b>Fetching Unsuccessful</b>, 5000);
            })
    }, []);
    return (
        <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title font-bold bg-accent">
                Unit {week}
            </div>
            <div
                className="transition-all duration-200 delay-[0ms] p-0 pl-3 peer-checked:pb-0 collapse-content md:text-base">
                {
                    lessonData?.lessons?.map(l => <CollapseLesson key={l.lesson} course={course} part={part} week={week} lesson={l.lesson} />)
                }
            </div>
        </div>
    );
};

export default CollapseWeek;