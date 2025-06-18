export const SideBarCoponent = ( {text, Icon}:{text:string, Icon: React.FC} ) => {

    return (
        <>
            <div className='flex gap-x-2 justify-start mb-3 items-center text-sm hover:bg-blue-100 p-2 rounded-md cursor-pointer'>
                <Icon />
                <p>{text}</p>
            </div>
        </>
    )
}