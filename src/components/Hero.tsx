import backgroundImage from "../assets/bg.png";
import Input from "./Input";

const Hero = () => {
   return (
      <section className="relative min-h-[100vh] w-full">
         <img
            src={backgroundImage}
            alt="background image"
            className="w-full h-full object-cover absolute md:hidden"
            style={{ objectPosition: "-493px" }}
         />
         <img
            src={backgroundImage}
            alt="background image"
            className="w-full h-full object-cover absolute hidden md:block"
         />
         <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60 md:hidden"></div>

         <div className="absolute inset-0 flex flex-col justify-center">
            <div className="w-[335px] md:w-[665px] flex flex-col justify-center gap-6 xl:ml-[126px] md:ml-[83px] ml-3 mx-auto mt-[18px] ">
               <div className="flex flex-col gap-5">
                  <h1 className="text-[42px] md:text-6xl font-bold text-center md:text-left  text-[#1E293B]">
                     Lessons and insights <div className="md:h-5"></div>
                     <span className="text-[#EF4444] leading-3">from 8 years</span>
                  </h1>
                  <div className="w-[350px] md:w-5/6 lg:w-[600px] p-1">
                     <p className="text-sm md:text-base lg:text-xl  text-center leading-6 md:leading-7 lg:leading-8  md:text-left text-[#1E293B]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                     </p>
                  </div>
               </div>
               <Input />
            </div>
         </div>
      </section>
   );
};

export default Hero;
