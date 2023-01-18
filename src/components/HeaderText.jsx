import React from 'react';

const HeaderText = ({ text }) => {
    return (
        <h3 className='font-semibold'><span className='border-b-2 pb-1 border-b-orange-300'>{text}</span></h3>
    );
};

export default HeaderText;