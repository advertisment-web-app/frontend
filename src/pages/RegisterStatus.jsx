import { Link } from "react-router-dom"


const RegisterStatus = () => {
    return (
        <section className="registerStatus">
            <div className="bg-[white] h-[90%] w-[40%] ml-[5%] mr-auto border p-[2%] rounded-lg">
                <h1 className="w-[7%] mr-[5%] text-[1.2em] font-extrabold mb-[0.7em]">LOGO</h1>
                <h2 className="text-[2em] text-[black] font-bold">Create an account with us.</h2>
                <p className="text-[1em] mb-[1em] text-[black]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="h-[15%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                    <input type="radio" id="vendorStat" name="statusradio" /><label className="text-[black] accent-[#E1A33D] ml-[1em] text-[1.2em]" for="vendorStat">I am a vendor</label>
                    <p className="text-[0.8em] ml-[2em]">I want to create ads to sell my products.</p>
                </div>
                <div className="h-[15%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                    <input type="radio" id="userStat" name="statusradio"/><label className="text-[black] accent-[#E1A33D] ml-[1em] text-[1.2em]" for="userStat">I am a user/viewer</label>
                    <p className="text-[0.8em] ml-[2em]">I want to view ads and make the right purchase.</p>
                </div>
                <div className="h-[10%] w-[90%] font-extrabold border shadow-md rounded-md py-[0.5em] px-[30%] bg-[#9932CC] text-[white] text-center">
                    <Link to="/vendorsignup">Continue</Link>
                </div>

                {/* <Link to="/" className="text-[blue]">Go back</Link> */}
            </div>
        </section>
    )
}

export default RegisterStatus