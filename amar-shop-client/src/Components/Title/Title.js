import React from 'react';

const Title = ({ title, title2, style }) => {
    return (
        <div className='text-center'>
            <h1 className={`${style} capitalize`}> {title}</h1>
            <p className='text-lg font-medium font-sans'>{title2} </p>
        </div>
    );
};

export default Title;