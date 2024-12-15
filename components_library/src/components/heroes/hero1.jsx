import React from 'react';
import heroLogo from '../../assets/logos/memeLogo1.png';

const handleCopy = (value) => {
    navigator.clipboard.writeText(value).then(() => {
    alert('Copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

const Hero1 = (props) => {
  return (
    <div>
      <div className="relative flex items-center justify-center bg-yellow-4 h-[600px] overflow-hidden">
        <div className={`flex flex-col items-center justify-center text-1xl text-center text-wrap px-3`}>
          <h1>$Tigi</h1>
          <p>Buy, trade, and laugh your way to the moon with Dragon Doge—where fiery gains meet
            meme magic.</p>
          <div className="flex gap-3 bg-white px-5 py-2 rounded-full">
            <input
                type="button"
                disabled={true}
                className={`text-1xl w-[60vw] max-w-[500px]`}
                value="fw7s5x8whtbg6jzacxqtvzthxwsdyntwhbylxesrn1io"/>
            <button
                onClick={() => handleCopy('https://dexscreener.com/solana/fw7s5x8whtbg6jzacxqtvzthxwsdyntwhbylxesrn1io')}
                className={`bg-purple-1 rounded-full px-5 py-2 text-1xl`}
            >Copy
            </button>
          </div>
        </div>
        <div className="absolute -top-[20vh] -left-[60vw] md:-top-20 md:-left-40 opacity-8">
          <img src={heroLogo} alt="heroLogo" width={500}/>
        </div>
        <div className="absolute -bottom-[20vh] -right-[60vw] md:-bottom-20 md:-right-40 opacity-5">
          <img src={heroLogo} alt="heroLogo"  width={500}/>
        </div>
      </div>
    </div>
  );
};

export default Hero1;