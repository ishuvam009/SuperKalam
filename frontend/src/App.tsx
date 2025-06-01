import './App.css'
import img1 from "./assets/logo.jpg";
import yc from "./assets/y-combinator.jpg";
import google from "./assets/google-for-startups.jpg";

function App() {

  return (
    <>
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-2 pt-4 pl-20'>
            <img className='h-8' src={img1} alt="" />
            <p className='text-xl'>SuperKalam</p>
          </div>
          <div className='flex items-center gap-x-12 pt-4 pr-20'>
            <p className='text-[#3280F6] text-lg font-medium'>Explore Batches</p>
            <button className='text-[#3280F6] text-lg font-medium border border-[#3280F6]-1 px-3 py-2 rounded-lg hover:text-white hover:bg-[#3280F6]'>Login</button>
          </div>
        </div>

        <div className='flex justify-center mt-20'>
          <p className='text-[#402300] font-medium bg-[#FCF5C3] px-3 py-2 rounded-lg'>Personalized with AI</p>
        </div>

        <div>
          <h1 className='mt-8 flex text-8xl text-[#3280F6] font-medium justify-center'>Crack UPSC</h1>
          <p className='mt-8 text-6xl font-medium flex justify-center'>with your Personal Mentor</p>
          <p className='mt-6 text-3xl flex justify-center'>Learning ecosystem for focused & disciplined preparation</p>
        </div>

        <div className='mt-8 flex justify-center'>
          <button className='bg-[#E26620] py-4 px-6 text-white text-xl rounded-md'>Start Now - it's Free</button>
        </div>

        <div>
          <p className='text-gray-500 font-medium mt-8 flex justify-center'>backed by</p>
        </div>

        <div className='flex justify-center gap-x-6 mt-4'>
          <img className='h-8' src={yc} alt="y combinator" />
          <img className='h-8' src={google} alt="google for startup" />
        </div>
    </>
  )
}

export default App
