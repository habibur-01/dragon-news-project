import { useLoaderData } from "react-router-dom";
import Header from "../../SharedComponents/Header/Header";
import LeftNav from "../../SharedComponents/LeftNav/LeftNav";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import RightNav from "../../SharedComponents/RightNav/RightNav";
import BreakingNews from "./BreakingNews/BreakingNews";
// import NewsCard from "./NewsCard/NewsCard";
import News from "./News/News";


const Home = () => {
    
    const newsData = useLoaderData()
    // console.log(newsData)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-3xl mb-8">Dragon News Home</h1>
                    <div>
                        <News news={newsData}></News>
                        
                        {/* {
                            newsData.map(aNews => <NewsCard key={aNews.id} data={aNews}></NewsCard>)

                        } */}
                    </div>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;