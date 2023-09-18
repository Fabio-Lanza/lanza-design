import { Link } from "react-router-dom";
import living from "../assets/living.jpg";


const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="w-[500px] max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are revolutionizing the furniture world experience.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          We believe that furniture should not only reflect your personal style
          but also enhance your lifestyle. Whether you seek modern minimalism,
          rustic warmth, or opulent luxury, our meticulously curated collection
          has something to inspire your vision.
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="btn rounded-lg btn-primary capitalize text-lg"
          >
            Our Products
          </Link>
        </div>
      </div>
      <div
        className="hidden h-[28rem] lg:carousel carousel-center p-3 
        space-x-4 bg-neutral rounded-box"
      >
        <div className="carousel-item">
          <img src={living} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
