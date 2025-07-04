import img1 from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

interface HHeaderProps {
  buttonText: string,
  buttonLink: string
}

export const Header: React.FC<HHeaderProps> = ( {buttonText,buttonLink} ) => {
  return (
    <>
      <div className='flex justify-between  '>
        <div className='flex items-center gap-x-2 pt-4 pl-20'>
          <img className='h-8' src={img1} alt="UPSC" />
          <p className='text-xl'>SuperKalam</p>
        </div>
        <div className='flex items-center gap-x-12 pt-4 pr-20'>
          <p className='text-[#3280F6] text-lg font-medium hover:bg-blue-50 hover:rounded-4xl hover:p-1'>Explore Batches</p>
          <Link to={buttonLink}>
            <button className='text-[#3280F6] text-lg font-medium border border-[#3280F6]-1 px-3 py-2 rounded-lg hover:text-white hover:bg-[#3280F6]'>{buttonText}</button>
          </Link>
        </div>
      </div>
    </>
  )
}