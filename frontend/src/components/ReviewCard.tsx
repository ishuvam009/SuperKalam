import starImg from '../assets/review-star.png';

export const ReviewCard = () => {
    const rating = 4;

    return (
        <>
            <div className='max-w-sm w-full p-4 border-slate-400 mx-auto mt-20 mb-20 shadow-xl rounded-md flex flex-col gap-y-4 cursor-pointer hover:bg-orange-100 hover:scale-105 hover:border hover:border-orange-500'>
                <div>
                    <div className='flex gap-1 mb-2'>
                        {[...Array(rating)].map((_,i) =>(
                            <img src={starImg} className='h-4' alt="star-icon" />
                        ))}
                    </div>
                    <p>SuperKalam has been a consistent part of my Mains preparation, especially after clearing my Prelims. The experience of using the Mains evaluation has been amazing.</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <div className='w-12 h-12 rounded-full bg-slate-300 text-2xl font-medium flex justify-center items-center'>D</div>
                    <div className='flex flex-col'>
                        <p>Darsh Kumar</p>
                        <p>Using SuperKalam since Feb'24</p>
                    </div>
                </div>
            </div>
        </>
    )
} 