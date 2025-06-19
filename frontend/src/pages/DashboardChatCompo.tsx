export const DashChatCompLi = ({p,span}:{p:string,span:string}) => {

    return (
        <>
            <div>
                <button className='flex flex-row w-122 justify-between p-2 bg-blue-200 rounded-md cursor-pointer hover:bg-blue-300'>
                    <p>{p} <span className='font-medium'>{span}</span></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                </button>

            </div>
        </>
    )
}

export const DashChatCompDa = ({p,span}:{p:string,span:string}) => {

    return (
        <>
            <div>
                <button className='flex flex-row w-122 justify-between p-2 bg-slate-100 rounded-md cursor-pointer hover:bg-slate-200'>
                    <p>{p} <span className='font-medium'>{span}</span></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                </button>

            </div>
        </>
    )
}