import React from 'react'

const NextjsBtn = (props) => (
    <button className={`${props.classname} shadow-[0_4px_14px_0_rgb(255,69,0,39%)] hover:shadow-[0_6px_20px_rgba(255,69,0,23%)] hover:bg-[rgba(255,69,0,0.8)] px-8 py-2 bg-[#FF4500] rounded-md text-white font-bold transition duration-200 ease-linear`}>
        {props.text}
    </button>
)


export default NextjsBtn