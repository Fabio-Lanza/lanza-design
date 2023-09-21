import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center ">
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
      <p className="mt-9 text-lg leading-8 max-w-2xl mx-auto mb-2">
        "Lanza Design is not merely a furniture company it is a symphony of
        creativity, craftsmanship, and innovation that breathes life into
        spaces.
      </p>

      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto mb-2">
        Every piece in our collection is a testament to our passion for design
        excellence and a celebration of timeless aesthetics. From the fluid
        lines of our contemporary creations to the timeless charm of our classic
        designs, Lanza Design offers a diverse range that caters to every taste
        and style.
      </p>

      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto mb-2">
        Whether you seek modern minimalism, rustic warmth, or opulent luxury,
        our meticulously curated collection has something to inspire your
        vision.
      </p>
    </>
  );
};

export default About;
