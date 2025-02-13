const Input = () => {
   return (
      <div className="flex justify-between items-center px-1 bg-white w-[335px] h-[59px] md:w-[502px] md:h-[73px] rounded-lg">
         <input
            type="text"
            placeholder="Find our courses"
            className="focus:outline-none w-full pl-4 placeholder:text-sm placeholder:md:text-lg"
         />
         <button className="bg-[#EF4444]  h-[50px] w-[120px] md:h-[61px] md:w-[136px] lg:w-48 font-semibold  rounded-lg text-white">
            Search
         </button>
      </div>
   );
};

export default Input;
