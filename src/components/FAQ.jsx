import parse from 'html-react-parser';
import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Data from '../utilities/faq.json';
import './faq.css';

const FAQ = () => {

    const faqContentTemplate = (question, answer) => {
        return <>
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div
                    className="collapse-title text-dracula_color font-bold border-2 border-neutral-content rounded-lg rounded-b-none">
                    {parse(question)}
                </div>
                <div
                    className="peer-checked:pt-2 collapse-content md:text-base border-2 border-neutral-content rounded-lg rounded-t-none">
                    {parse(answer)}
                </div>
            </div>
        </>
    }

    useEffect(() => {
        if (document.documentElement.clientWidth > 768) {
            const Peer = document.getElementsByClassName('peer');
            for (let i of Peer) {
                i.click();
            }
        };
    })

    const breakpointColumnsObj = {
        default: 3,
        768: 2,
        640: 1
    };

    return (
        <div className='h-full'>
            <Masonry
                id='blog-content-break-point'
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid gap-4 md:gap-5 m-4 md:m-5"
                columnClassName="my-masonry-grid_column">
                {
                    Data.map((d, ix) => <div className='mb-4 md:mb-5' key={ix}>{faqContentTemplate(d.question, d.answer)}</div>)
                }
            </Masonry>
        </div>
    );
};

export default FAQ;