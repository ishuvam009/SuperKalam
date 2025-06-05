import imgone from '../assets/one.webp';
import imgtwo from '../assets/two.webp';
import imgthree from '../assets/three.webp';
import imgfour from '../assets/four.png';

function IconCom(){
    return(
        <>
            <div className='w-full flex justify-center mt-20 gap-x-10'>
                    <div className='w-60 hover:bg-blue-100 rounded-md p-4'>
                        <div>
                        <img className='h-15' src={imgone} alt="leaderboard" />
                        </div>
                        <div>
                            <p className='mt-2 font-medium text-xl'>Daily Leaderboard</p>
                            <p className='mt-2'>See where you stand with fellow aspirants.</p>
                        </div>
                    </div>
                    <div className='w-60 hover:bg-blue-100 rounded-md p-4'>
                        <div>
                        <img className='h-15' src={imgtwo} alt="leaderboard" />
                        </div>
                        <div>
                            <p className='mt-2 font-medium text-xl'>Set Your Goals</p>
                            <p className='mt-2'>Complete your daily goals & maintain streaks.</p>
                        </div> 
                    </div>
                    <div className='w-60 hover:bg-blue-100 rounded-md p-4'>
                        <div>
                        <img className='h-15' src={imgthree} alt="leaderboard" />
                        </div>
                        <div>
                            <p className='mt-2 font-medium text-xl'>Attempt Tests</p>
                            <p className='mt-2'>Get to attempt UPSC-grade tests & PYQs.</p>
                        </div> 
                    </div>
                    <div className='w-60 hover:bg-blue-100 rounded-md p-4'>
                        <div>
                        <img className='h-15' src={imgfour} alt="leaderboard" />
                        </div>
                        <div>
                            <p className='mt-2 font-medium text-xl'>Weekly Report</p>
                            <p className='mt-2'>Track your progress & keep improving.</p>
                        </div> 
                    </div>
            </div>
        </>
    )
}

export default IconCom;