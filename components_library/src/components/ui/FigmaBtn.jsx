import React from 'react';

const FigmaBtn = (props) => (
    <button
        className={`px-6 py-2  bg-black text-white font-bold transform hover:-translate-y-1 transition duration-400 ${props?.className}`}>
      {props.text}
    </button>
);

export default FigmaBtn;