import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/MyContext";


const Login = () => {

    const {userSignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password)
        e.target.reset()

        // user login
        userSignIn(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error.message)
        })

    }

    return (
        <div>

            <Navbar></Navbar>
            <div className=" border bg-[#FFFFFF] mt-20 ">
                <h1 className="text-3xl font-semibold text-center mt-20">Login your account</h1>
                <div className="w-3/5 mx-auto mt-16 mb-10"><hr /></div>
                <div className="flex justify-center items-center flex-col w-3/4 mx-auto">
                    <form className="card-body w-full " onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mb-24">
                        <p className="text-[#706F6F] text-base font-semibold">Dont’t Have An Account ? <Link to="/register" className="text-[#FF8C47]">Register</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;