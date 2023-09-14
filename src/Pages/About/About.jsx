import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Lanza Design
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
        praesentium neque perferendis vero laboriosam eius nemo explicabo quasi
        repellendus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora dolores sed quidem consequatur ipsa quae inventore a dolorum voluptates!
      </p>
    </>
  );
};

export default About;
