import React from 'react';

const Arrow = ({ className }) => {
    return (
        <div className={`h-4 w-4 bg-blue-50 rounded-full inline-block duration-200 ${className} `}>
            <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#10489B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"><polyline points="17 11 12 6 7 11"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></g></svg>
        </div>
    );
};

export default Arrow;