import { Link } from "react-router-dom";


const UserLogin = () => {
  return (
    <section className="h-[100vh] bg-[#F8EEEC] pt-[7%]">
      <div className="h-[90%] bg-[white] shadow-lg w-[70%] border ml-[15%] rounded-xl flex justify-between">
        <div className="w-[40%] border h-[95%] mt-[1.5%] ml-[1em] rounded-xl , registerSide">

        </div>
        <div className="w-[50%] flex flex-col ">
          <div className="h-[95%] w-[95%] ml-[1.5%] mt-[1.5%]">
            <h2 className="text-[1.5em] font-bold mb-[1em] text-[black]">Log In</h2>
            <div className="w-[100%] h-[15%] mb-[1em] flex justify-between">
              <div className="border h-[70%] w-[60%] py-[0.5em] mr-[1em] rounded-md"><Link>Continue with Google</Link></div>
              <div className="border h-[70%] w-[60%] py-[0.5em] rounded-md"><Link>Continue with Apple</Link></div>
            </div>
            <hr />
            <h2 className=" font-semibold bg-[white] mt-[-0.8em] w-[10%] px-[8px] h-[5%] ml-[45%]">OR</h2>
            <form className="h-[60%] p-[0.5em] flex flex-col" action="">
              <label htmlFor="username">Enter username</label>
              <input type="text" name="username" className="rounded-md border w-[100%] h-[15%] mb-[0.5em]"/>

              <label htmlFor="username">Enter email</label>
              <input type="email" name="email" className="rounded-md border w-[100%] h-[15%] mb-[0.5em]"/>

              <label htmlFor="username">Enter password</label>
              <input type="text" name="password" className="rounded-md border w-[100%] h-[15%]"/>

              <button className="pb-[0.4em] h-[15%] mt-[1em] w-[100%] border font-extrabold text-[1.2em] text-[white] bg-[#9932CC] rounded-md">Create account</button>
            </form>
            <p className="text-center">Don't have an account? <Link className="text-[#9932CC]" to="/usersignup">Sign Up</Link></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default UserLogin;
