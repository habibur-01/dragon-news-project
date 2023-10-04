import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';


const News = ({news}) => {
    console.log(typeof news)
    return (
        <div className='grid grid-cols-1 gap-6'>
            
            {
                news.map(aNews => <NewsCard key={aNews._id} data={aNews}></NewsCard>)
            }
        </div>
    );
};
News.propTypes = {
    news: PropTypes.array
}

export default News;