import React from 'react';

const Dexscreener = () => (
    <section id='dexscreener'>
      <div className="container mx-auto py-10">
        <iframe title={"dexscreener"} className='w-full h-[600px]'
                src="https://dexscreener.com/solana/BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11?embed=1&theme=dark&trades=0&info=0">
        </iframe>
      </div>
    </section>
);

export default Dexscreener;