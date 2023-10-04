import { Link } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/MyContext";


const Register = () => {

    const {creatUser} = useContext(AuthContext)

    const handlRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password, name, photo)

        // Create user
        creatUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error.message)
        })
    }


    return (
        <div>

            <Navbar></Navbar>
            <div className=" border bg-[#FFFFFF] mt-20 ">
                <h1 className="text-3xl font-semibold text-center mt-20">Register your account</h1>
                <div className="w-3/5 mx-auto mt-16 mb-10"><hr /></div>
                <div className="flex justify-center items-center flex-col w-3/4 mx-auto">
                    <form className="card-body w-full " onSubmit={handlRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                            <div className="flex gap-2 ml-1 mt-3">
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="label" htmlFor="terms">
                                    <p>Accept<a href="#" className="text-base font-semibold text-green-500 link link-hover"> Term & Conditions</a></p>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="mb-24">
                        <p className="text-[#706F6F] text-base font-semibold">Already Have An Account ? <Link to="/login" className="text-[#FF8C47]">Login</Link></p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;