import imgone from '../assets/one.webp';

function IconCom(){
    return(
        <>
            <div>
                <div>
                    <img src={imgone} alt="leaderboard" />
                </div>
                <div>
                    <p className='mt-2 font-medium text-2xl'>Daily Leaderboard</p>
                    <p className='mt-2'>See where you stand with fellow aspirants.</p>
                </div>
            </div>
        </>
    )
}

export default IconCom;