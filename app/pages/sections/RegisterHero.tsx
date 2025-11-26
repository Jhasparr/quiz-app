import React from 'react'

export default function RegisterHero() {
  return (
    <section className="bg-[#000000] w-auto   px-4 md:px-20 xl:px-35 relative overflow-hidden">
         <div className="text-[#CCCCCC]  md:mt-15 mt-10 relative flex flex-col items-start md:items-center justify-center  ">

            <div className='bg-gradient w-full rounded-lg  flex flex-col md:flex-row  gap-4 md:gap-45  md:px-8 px-4 md:py-4 py-2 md:h-70 h-150 '>

                <div className='mt-5 md:mt-7'> 
                    <h3 className='md:text-4xl text-3xl font-bold '>
                        Ready To Start Your Quiz Journey?
                    </h3>
                    <p className='md:mt-5 mt-2 text-[#CCCCCC] '>Join thousands of students and teachers. Sign up today and get access to all features</p>
                    <div className='flex flex-col md:flex-row gap-3 md:gap-4 mt-5 w-full'>
                        <button className='bg-white md:w-40 w-full h-10 rounded-lg text-sm text-black font-bold'>
                            Create Account

                        </button>
                        <button className='md:w-40 w-full h-10 border rounded-lg font-bold text-sm'>
                            Explore Quizzes

                        </button>
                    </div>
                </div>

                <div className='md:w-100 w-full h-full mb-5 rounded-xl md:h-50 bg-white mt-7 mr-18'>

                </div>

            </div>
            <div>
                <h3>hell

                </h3>
            </div>
         </div>
    </section>
  )
}
