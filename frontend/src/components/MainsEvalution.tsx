import img from '../assets/evaluate.png'

export const MainsEvalution = () => {
    return (
        <>
            <div>
                <div className="flex justify-between p-4 mt-6">
                    <p className="text-2xl font-semibold">Evaluate Mains Answer</p>
                    <button className="text-white font-medium bg-[#2D80F6] rounded-md py-2 px-4 hover:brightness-95 cursor-pointer">Star Evalution</button>
                </div>
                <div className="ml-12 py-6 px-12 border-2 border-slate-300 rounded-xl inline-block mb-10">
                    <img className='h-70 border-2 border-blue-300 border-dashed rounded-xl cursor-pointer' src={img} alt="evalution" />
                    <div className='flex flex-col items-center mt-6'>
                        <p className='text-2xl font-semibold'>Upload your Handwritten Answer for <br /> instant evaluation</p>
                        <button className='mt-4 text-white px-6 py-2 font-medium bg-[#2D80F6] hover:brightness-95 cursor-pointer '>Start Evalution</button>
                    </div>
                </div>
            </div>
        </>
    )
}