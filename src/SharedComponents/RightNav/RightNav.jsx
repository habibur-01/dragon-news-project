import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightNav = () => {
    return (
        <div>
            <div className="px-4 ">
                <p className="text-2xl font-semibold mb-4">Login With</p>
                <div className="space-y-2">
                    <button className="btn btn-outline w-full">
                        <FaGoogle></FaGoogle>
                        Log in with Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <FaGithub></FaGithub>
                        Log in with Github
                    </button>
                </div>
            </div>

             {/*  */}
            <div className="p-4 mt-4">
                <p className="text-2xl font-semibold mb-4">Q-Zone</p>
                <div className="space-y-2">
                    <a className="flex items-center p-3 border rounded-t-lg " href=''>
                        <FaFacebookF></FaFacebookF>
                        <span className='text-base font-medium ml-4'>Facebook</span>
                    </a>
                    <a className="flex items-center p-3 border rounded-t-lg " href=''>
                        <FaTwitter></FaTwitter>
                        <span className='text-base font-medium ml-4'>Twitter</span>
                    </a>
                    <a className="flex items-center p-3 border rounded-t-lg " href=''>
                        <FaInstagram></FaInstagram>
                        <span className='text-base font-medium ml-4'>Instagram</span>
                    </a>
                </div>
            </div>

            {/*  */}
            <div className="p-4">
                <p className="text-2xl font-semibold mb-4">Find Us On</p>
                <div className="space-y-2">
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;