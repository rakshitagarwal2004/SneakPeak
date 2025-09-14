import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change shoe every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % shoes.length;
      setCurrentIndex(nextIndex);
      setBigShoeImg(shoes[nextIndex].bigShoe);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* Left Section */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.p
          className="text-xl font-montserrat text-coral-blue"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          All Weather Collection
        </motion.p>

        <motion.h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative lg:z-10 md:z-10 pr-10">
            The Most Latest
          </span>
          <br />
          <span className="text-coral-blue inline-block mt-3">Nike </span> Shoes
        </motion.h1>

        <motion.p
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore Nike&apos;s world of premium sportswear and athletic footwear.
          Discover top-quality products designed to enhance your athletic
          performance and style. Shop the latest collections and enjoy unbeatable
          comfort and style. Join the Nike community today.
        </motion.p>

        {/* Button with hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            label="Shop Now"
            iconUrl={arrowRight}
            className="transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-coral-blue hover:text-white"
          />
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Section with Bubble Background */}
<motion.div
  className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-white border-r-2 border-black/100"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>


  {/* Bubble Background */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-40"
        style={{
          width: `${Math.random() * 100 + 80}px`,
          height: `${Math.random() * 100 + 80}px`,
          background: `hsl(${Math.random() * 360}, 70%, 70%)`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: Math.random() * 6 + 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  {/* Big Shoe */}
  <motion.img
    src={bigShoeImg}
    alt="shoe collection"
    className="relative z-10 max-w-full max-h-[80vh] object-contain"
    key={currentIndex}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  />

  {/* Thumbnails */}
  <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-10">
    {shoes.map((shoe, index) => (
      <motion.div
        key={index}
        className={`transition-transform duration-300 cursor-pointer ${
          currentIndex === index
            ? "scale-110 border-2 border-coral-blue rounded-xl"
            : ""
        }`}
        whileHover={{ scale: 1.15 }}
        onClick={() => {
          setBigShoeImg(shoe.bigShoe);
          setCurrentIndex(index);
        }}
      >
        <ShoeCard
          index={index}
          imgURL={shoe}
          changeBigShoeImage={(shoe) => {
            setBigShoeImg(shoe.bigShoe);
            setCurrentIndex(index);
          }}
          bigShoeImg={bigShoeImg}
        />
      </motion.div>
    ))}
  </div>
</motion.div>

    </section>
  );
};

export default Hero;
