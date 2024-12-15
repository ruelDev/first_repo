import React from 'react';
import {data} from "../data";

const Dexscreener = () => (
    <section id='dexscreener'>
      <div className="container mx-auto py-10">
        <iframe title={"dexscreener"} className='w-full h-[600px]'
                src={`${data.tradeLink}`}>
        </iframe>
      </div>
    </section>
);

export default Dexscreener;