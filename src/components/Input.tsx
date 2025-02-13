const Input = () => {
   return (
      <div className="flex justify-between items-center px-2 bg-white w-[335px] h-[59px] md:w-[502px] md:h-[73px] rounded-xl">
         <input
            type="text"
            placeholder="Find our courses"
            className="focus:outline-none w-full"
         />
         <button className="bg-[#EF4444]  h-[50px] w-[90px] md:h-[61px] md:w-[136px]  rounded-md text-white">
            search
         </button>
      </div>
   );
};

export default Input;
