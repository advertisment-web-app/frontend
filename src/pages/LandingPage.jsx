import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"


const LandingPage = () => {
  
  return (
    <section className="landingPage">
        <Navbar/>
        <div className="h-[70%] pt-[10%] ml-[10%] w-[40%] text-[#4C4C4C]">
          <h1 className="text-[3em] font-extrabold mb-[0.5em]">Unlock Your Advertising Potential</h1>
          <p className="text-[1.5em] leading-8 mb-[2em]">Welcome to Tudu.com, the ultimate platform designed to elevate your advertising game. Get ready to reach your audience like never before —let’s turn your vision into reality!</p>
          <Link to="/registerstatus" className="w-[10%] h-[3%] p-[0.6em] text-[1.5em] text-[white] font-extrabold border bg-[#9932CC]">Register</Link>
        </div>
    </section>
    
  )
}

export default LandingPage;