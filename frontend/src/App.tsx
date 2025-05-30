import './App.css'
import img1 from "../src/assets/logo.jpg";

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

        <div className='flex justify-center pt-20'>
          <p className='text-[#402300] font-medium bg-[#FCF5C3] px-3 py-2 rounded-lg'>Personalized with AI</p>
        </div>

        <div>
          <h1 className='pt-8 flex text-8xl text-[#3280F6] font-medium justify-center'>Crack UPSC</h1>
        </div>
    </>
  )
}

export default App
