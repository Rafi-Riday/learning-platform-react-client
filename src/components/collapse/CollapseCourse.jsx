import React, { Suspense, useEffect, useState } from 'react';
import { errorToast } from '../../utilities/toasts';
const CollapsePart = React.lazy(() => import('./CollapsePart'));

const CollapseCourse = ({ data }) => {
    const { course, name } = data;
    const [partData, setPartData] = useState({});
    useEffect(() => {
        fetch(`https://10-learning-platform-assignment-server.vercel.app/course/${course}`)
            .then(res => res.json())
            .then(data => setPartData(data))
            .catch(err => {
                errorToast(<b>Fetching Unsuccessful</b>, 5000);
            })
    }, []);
    return (
        <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title font-bold bg-secondary">
                {course}. {name}
            </div>
            <div
                className="transition-all duration-200 delay-[0ms] p-0 pl-3 peer-checked:pb-0 collapse-content md:text-base">
                <Suspense fallback={<div></div>}>
                    {
                        partData?.parts?.map(p => <CollapsePart key={p} course={course} part={p} />)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default CollapseCourse;