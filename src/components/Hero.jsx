import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImg = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
        We are revolutionizing the shopping experience
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore enim quaerat sequi, distinctio saepe vero odit eos dicta? Repellat.
            </p>
            <div className="mt-10">
                <Link to='/products' className="btn rounded-lg btn-primary capitalize text-lg">
                    Our Products
                </Link>
            </div>
      </div>
      <div
        className="hidden h-[28rem] lg:carousel carousel-center p-3 
        space-x-4 bg-neutral rounded-box">
            
        {carouselImg.map((item) => {
          return <div key={item} className="carousel-item">
              <img src={item} className="rounded-box h-full w-80 object-cover"/>
            </div>
        })}
      </div>
    </div>
  );
};

export default Hero;
