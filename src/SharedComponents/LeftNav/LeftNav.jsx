import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {

    const [newsCategories, setNewsCategories] = useState([])

    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setNewsCategories(data))
    }, [])


    return (
        <div>
            <p className="text-xl font-semibold mb-8">All Caterogy:{newsCategories.length}</p>
            <div>
                {
                    newsCategories.map(news => <li className="list-none text-xl font-medium text-[#9F9F9F] mb-7" key={news.id}><NavLink to={`/newsCategory/${news.id}`}>{news.name}</NavLink></li>
                        
                    )

                }
            </div>
        </div>
    );
};

export default LeftNav;