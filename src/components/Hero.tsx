import backgroundImage from "../assets/bg.png";
import Input from "./Input";

const Hero = () => {
   return (
      <section className="relative min-h-[100vh] w-full">
         <img
            src={backgroundImage}
            alt="background image"
            className="w-full h-full object-cover absolute md:hidden"
            style={{ objectPosition: "-745px bottom" }}
         />
         <img
            src={backgroundImage}
            alt="background image"
            className="w-full h-full object-cover absolute hidden md:block"
         />
         <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 md:hidden"></div>

         <div className="absolute inset-0 flex flex-col gap-5 justify-center p-4">
            <div className="w-[335px] md:w-[665px] flex flex-col gap-6 xl:ml-40 md:ml-20 mx-auto">
            <h1 className="text-[42px] md:text-6xl font-bold text-center md:text-left">
               Lessons and insights{" "}
               <div className="md:hidden"></div>
               <span className="text-[#EF4444]">from 8 years</span>
            </h1>
            <p className="text-[14px] md:text-[20px] text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere illum repudiandae sapiente ipsa exercitationem autem, vitae quidem debitis inventore magni deleniti distinctio eum maiores earum eos quisquam assumenda sunt.</p>
            <Input/>

            </div>
           
         </div>
      </section>
   );
};

export default Hero;
