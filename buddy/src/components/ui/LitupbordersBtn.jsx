import React from 'react'
import { motion } from 'framer-motion'

const LitupbordersBtn = (props) => {
    return (
        <motion.button
            className="p-[3px] relative"
            whileHover={{ scale: 1.05 }}
        >
            <div className="absolute inset-0 bg-black rounded-lg" />
            <div className="px-8 py-2  bg-black-100 rounded-[6px]  relative group transition duration-200 text-white hover:bg-gradient-to-r from-red-500 to-yellow-500 tracking-wide font-bold">
                {props.text}
            </div>
        </motion.button>
    )
}

export default LitupbordersBtn