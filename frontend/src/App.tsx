import './App.css'
import { Header } from './components/Header';
import gridImg from './assets/grid-bg.svg';
import yc from './assets/y-combinator.jpg';
import google from './assets/google-for-startups.jpg';
import IconCom from './components/IconCom';

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
        </div>
    </>
  )
}

export default App
