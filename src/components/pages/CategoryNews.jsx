import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className="font-semibold mb-3">Open Page home</h2>
            <p className="text-gray-400 text-sm"></p>
            <div>
                {
                
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                
                }
            </div> 
        </div>
    );
};

export default CategoryNews;