import { Header } from "../components/Header"

export const Login = () => {
    return (
        <>
            <div>
                <Header/>
                <div className="flex flex-col items-center">
                    <p>Enter Your Phone Number</p>
                    <p>You'll receive a OTP for verification</p>
                    <input type="text" placeholder="Phone number" />
                    <button>Get OTP</button>
                    
                    <div>
                        <p>Need Help?</p>
                        <a href=""><span>Contact Us</span></a>
                    </div>
                    <div>
                        <p>By continuing, you agree to</p>
                        <a href=""><span>Terms & Privacy Policy</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}