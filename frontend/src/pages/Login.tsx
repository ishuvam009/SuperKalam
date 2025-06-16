import { Header } from "../components/Header"

export const Login = () => {
    return (
        <>
            <div>
                <Header buttonText="SignUp" buttonLink="/signup"/>
                <div className="flex flex-col gap-y-4 p-4 items-center max-w-fit mx-auto rounded-xl shadow-xl">
                    <p className="text-2xl font-medium">Enter Your Phone Number</p>
                    <p className="text-slate-500">You'll receive a OTP for verification</p>
                    <input className="border border-slate-300 p-2" type="text" placeholder="Phone number" />
                    <button className="font-medium text-white bg-blue-500 hover:brightness-90 py-2 px-20 rounded-md cursor-pointer">Get OTP</button>
                    
                    <div className="mt-30 flex gap-x44 text-sm text-slate-500">
                        <p>Need Help?</p>
                        <a href=""><span>Contact Us</span></a>
                    </div>
                    <div className="mt-2 flex gap-x-2 text-xs text-slate-500">
                        <p>By continuing, you agree to</p>
                        <a href=""><span>Terms & Privacy Policy</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}