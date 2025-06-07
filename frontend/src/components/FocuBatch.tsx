import img1 from '../assets/batch-2026.jpeg';

export const FocusBatch = ()=>{
    return(
        <>
            <div className='mt-20 w-[70%] flex mx-auto gap-x-8 border border-slate-300 p-4 shadow-md rounded-md shadow-slate-400'>
                <div className='w-1/2'>
                    <img src={img1} alt="batch-picture" />
                </div>
                <div className='w-1/2 flex flex-col gap-y-2'>
                    <p className='font-bold text-[#fb7124]'>Personal Guidance</p>
                    <p className='font-medium text-3xl'>FOCUS Batch for UPSC 2026</p>
                    <p className='font-medium'>Get Accountability partner</p>
                    <p className='font-medium'>Complete preparation for Prelims & Mains 2026</p>
                    <p className='font-medium'>Unlimited access to SuperKalam</p>
                    <p className='font-medium'>Test Series worth ₹25K</p>
                    <div className='flex mt-4 gap-x-8'>
                        <button className='bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:brightness-90 cursor-pointer'>Learn More</button>
                        <button className='text-blue-500 font-medium border border-blue-500 px-4 py-2 rounded-md hover:bg-slate-200 cursor-pointer'>View Timetable</button>
                    </div>
                </div>
            </div>
        </>
    )
}