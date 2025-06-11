import './App.css'
import { Header } from './components/Header';
import gridImg from './assets/grid-bg.svg';
import yc from './assets/y-combinator.jpg';
import google from './assets/google-for-startups.jpg';
import IconCom from './components/IconCom';
import { FocusBatch } from './components/FocuBatch';
import rocImg from './assets/rocket-emoji.png';
import { ReviewCard } from './components/ReviewCard';
import communityImg from './assets/community.webp'
import lastPic from './assets/lastPic.webp'
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Header />

      <div className='w-full relative'>
        <div className='mt-2 flex justify-center'>
          <img className='object-contain bg-repeat-x absolute z-0' loading='lazy' decoding='async' src={gridImg} alt="grid-background" />
        </div>
        <div className='relative z-10'>
          <div className='flex justify-center mt-10'>
            <p className='text-[#402300] font-medium bg-[#FCF5C3] px-3 py-2 rounded-lg'>Personalized with AI</p>
          </div>

          <div>
            <h1 className='mt-8 flex text-8xl text-[#3280F6] font-medium justify-center'>Crack UPSC</h1>
            <p className='mt-8 text-6xl font-medium flex justify-center'>with your Personal Mentor</p>
            <p className='mt-6 text-3xl flex justify-center'>Learning ecosystem for focused & disciplined preparation</p>
          </div>

          <div className='mt-8 flex justify-center'>
            <button className='bg-[#f47e24] hover:bg-[#e26620] py-4 px-6 text-white text-xl rounded-md'>Start Now - it's Free</button>
          </div>

          <div>
            <p className='text-gray-500 font-medium mt-8 flex justify-center'>backed by</p>
          </div>

          <div className='flex justify-center gap-x-6 mt-4'>
            <img className='h-8' src={yc} alt="y combinator" />
            <img className='h-8' src={google} alt="google for startup" />
          </div>
        </div>

        <div className="flex justify-center mt-18 rounded-lg">
          <iframe
            width="770"
            height="450"
            src="https://www.youtube.com/embed/0zDjmBjaKTQ?si=Ya2kxQvJR-Ggmzkn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>

        <div className='mt-29'>
          <p className='text-4xl font-medium flex justify-center'>Get ready for</p>
          <p className='text-[#fb7124] text-5xl font-bold mt-4 flex justify-center'>Prelims & Mains</p>
        </div>

        <IconCom />

        <div className='flex justify-center text-4xl font-medium mt-20'>
          <p className='font-'>Focused {' '}
            <span className='text-[#fb7124]'>Learning Program</span>
          </p>
        </div>

        <FocusBatch />

        <div className='text-5xl font-medium flex justify-center mt-30'>
          <p>Inspiring {' '}
            <span className='text-[#fb7124]'>Journeys </span>
          </p>
        </div>

        <div className='text-5xl font-medium flex justify-center mt-20 gap-y-2'>
          <p>What students say about <br />
            <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#F87424] to-[#FE3E01] flex justify-center mt-2'>SUPER Plan <img className='h-10' src={rocImg} alt="rocket Icon" /></span>
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-y-10 md:gap-x-4 mt-20 mb-20 mx-5 '>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>

        <div className='mt-20'>
          <div className='flex justify-center'>
            <img className='h-40' src={communityImg} alt="student-community" />
          </div>
          <div className='mt-8 flex flex-col items-center'>
            <p className='text-3xl font-medium'>You are not alone in this journey</p>
            <p className='text-slate-500 mt-4'>Meet 35,000+ aspirants and access handwritten notes, mind-maps, and practice with Daily Targets</p>
            <button className='bg-blue-500 text-white text-xl font-medium rounded-md px-4 py-2 mt-6 cursor-pointer'>Join Community</button>
          </div>
        </div>

        <div className='flex justify-center w-full mb-20 mt-20'>
            <div className='flex bg-[#FFF0D9] max-w-5xl justify-center gap-x-8 pl-12 pr-6 pt-20 pb-10 rounded-xl'>
            <div>
              <img className='h-70 w-180' src={lastPic} alt="logo" />
            </div>
            <div>
              <p className='text-4xl font-medium'>Discover your learning potential with <span className='text-blue-500'>SuperKalam</span></p>
              <p className='text-xl'>Start your preparation for UPSC exam. Ask your first question now.</p>
              <button className='mt-6 px-6 py-2 bg-[#FB7124] hover:bg-[#e26620] text-white text-xl font-medium rounded-md cursor-pointer'>Start Now - it's FREE</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
