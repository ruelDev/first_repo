import React from 'react';
import memeLogo from "../../assets/logos/memeLogo2.png";

const About1 = (props) => {
  return (
    <section>
      <div className={`container mx-auto flex items-center justify-between gap-5 py-10`}>
        <div className={`flex flex-col gap-5 text-center lg:text-start w-full max-w-[800px]`}>
          <img src={`${memeLogo}`} alt=""/>
        </div>
        <div>
          <h2>About $Tigi</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <button className={`bg-purple-1 rounded-full px-5 py-2 text-1xl`}>Join Community</button>
        </div>
      </div>
    </section>
  );
};

export default About1;