import React from 'react';
import CollapsePart from './CollapsePart';

const CollapseCourse = ({ data }) => {
    const { course, name, parts, } = data;
    return (
        <div className="rounded-xl collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div
                className="collapse-title font-bold bg-secondary">
                {course}. {name}
            </div>
            <div
                className="transition-all duration-200 delay-[0ms] p-0 pl-3 peer-checked:pb-0 collapse-content md:text-base">
                {
                    parts?.map(p => <CollapsePart key={p.part} course={course} partData={{ ...p }} />)
                }
            </div>
        </div>
    );
};

export default CollapseCourse;