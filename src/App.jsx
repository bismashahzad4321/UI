import React from 'react'
import { Zap, Brain, MessageCircleMore, Eye } from "lucide-react";

const App = () => {
  return (
    <div className='bg-[#F3F4FD] min-h-screen flex justify-center items-center'>

      <div className='flex flex-col  md:flex-row md:w-[686pc] h-[512px] lg:flex-row w-[375px] lg:w-[736px] lg:h-[512px] shadow-[0_30px_60px_0_rgba(61,108,236,0.15)] rounded-t-none lg:rounded-[32px] overflow-hidden bg-white'>

        
        {/* Left Side */}
        <div className='flex flex-col justify-center rounded-b-[32px] rounded-t-none items-center text-white w-full h-[356px] lg:w-[368px] lg:h-full bg-[linear-gradient(180deg,#7755FF_0%,#2F2CE9_100%)] px-[40px] py-[40px] gap-6  lg:rounded-[32px] '>
          <p className='text-[20px] lg:text-[24px] font-hanken-grotesk'>Your Result</p>

          <div className='w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] bg-[linear-gradient(180deg,rgba(77,33,201,1)_0%,rgba(37,33,201,0)_100%)] rounded-full flex flex-col justify-center items-center'>
            <h1 className='text-[56px] lg:text-[72px] font-bold'>76</h1>
            <p className='opacity-50 text-[16px] lg:text-[18px]'>of 100</p>
          </div>

          <p className='text-[28px] lg:text-[32px] font-semibold leading-[130%]'>Great</p>
          <p className='text-[16px] lg:text-[18px] opacity-80 leading-[130%] w-[260px] text-center'>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* Right Side */}
        <div className='flex flex-col justify-between bg-white w-full lg:w-[368px] px-[25px] py-[35px] lg:py-[45px] gap-4'>
          
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Summary</h2>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center bg-[#fff7f5] py-3 px-4 rounded-xl">
              <div className="flex items-center gap-2 text-red-500 font-medium">
                <Zap size={18} /> Reaction
              </div>
              <span className="text-gray-800 font-semibold">80 / 100</span>
            </div>

            <div className="flex justify-between items-center bg-[#fffbe6] py-3 px-4 rounded-xl">
              <div className="flex items-center gap-2 text-yellow-600 font-medium">
                <Brain size={18} /> Memory
              </div>
              <span className="text-gray-800 font-semibold">92 / 100</span>
            </div>

            <div className="flex justify-between items-center bg-[#f1fff5] py-3 px-4 rounded-xl">
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <MessageCircleMore size={18} /> Verbal
              </div>
              <span className="text-gray-800 font-semibold">61 / 100</span>
            </div>

            <div className="flex justify-between items-center bg-[#f6f6ff] py-3 px-4 rounded-xl">
              <div className="flex items-center gap-2 text-indigo-600 font-medium">
                <Eye size={18} /> Visual
              </div>
              <span className="text-gray-800 font-semibold">73 / 100</span>
            </div>
          </div>

          <button className="bg-[#303b59] text-white font-semibold py-3 rounded-full  hover:from-[#7755FF] hover:to-[#2F2CE9] transition-all duration-300 cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
