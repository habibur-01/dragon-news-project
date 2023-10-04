import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            <div className="flex bg-[#F3F3F3] py-4">
                <button className="text-xl font-medium text-[#FFF] btn bg-[#D72050] ml-4">Latest News</button>
                <Marquee speed={100} pauseOnHover={true}>
                    <Link to="/"  className="text-lg font-semibold mr-11">I can be a React component, multiple React components, or just some text...</Link>
                    <Link to="/" className="text-lg font-semibold mr-11">I can be a React component, multiple React components, or just some text...</Link>
                    <Link to="/" className="text-lg font-semibold mr-11">I can be a React component, multiple React components, or just some text...</Link>
                    
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;