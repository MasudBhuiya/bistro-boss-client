// import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mb-10 mt-10 w-3/4 mx-auto md:w-3/12">
            <p className="text-yellow-400 mb-3">{subHeading}</p>
            <h1 className="text-3xl font-semibold border-y-4 py-3">{heading}</h1>
        </div>
    );
};

export default SectionTitle;