import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../SharedComponents/Header/Header";
import RightNav from "../../SharedComponents/RightNav/RightNav";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Details from "./Details";


const NewsDetails = () => {
    const {id} = useParams()
    const dataOfNews = useLoaderData()

    const choosedNews = dataOfNews.find(newsDetails => newsDetails._id === id)
    console.log(choosedNews)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-xl font-semibold mb-5">Dragon News</h1>
            <div className="grid grid-cols-4 gap-6">

                <div className="col-span-3 ">
                    
                    {
                       <Details choosedNews={choosedNews} dataOfNews={dataOfNews}></Details> 
                    }
                </div>
                <div>
                    <RightNav></RightNav>
                </div>

            </div>

        </div>
    );
};

export default NewsDetails;