import PropTypes from 'prop-types';
import EditorsInsight from './EditorsInsight';

const Details = ({ choosedNews, dataOfNews }) => {
    const { title, image_url, details } = choosedNews;
    console.log(typeof dataOfNews)
    return (
        <div>
            <div className='border rounded-md p-5'>
                <img src={image_url} alt="" />
                <div className='mt-5'>
                    <h1 className='text-2xl text-[#403F3F] font-semibold mb-3'>{title}</h1>
                    <p className='text-base text-[#706F6F]'>{details}</p>
                </div>
                <button className='btn px-8 bg-[#D72050] text-lg mt-8  mb-3 font-medium text-[#FFF]'> All news in this category`</button>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-[#403F3F] my-8'>Editors Insight</h1>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        dataOfNews.slice(0,3).map(data => <EditorsInsight key={data._id} data={data}></EditorsInsight>)
                    }
                </div>
            </div>

        </div>
    );
};
Details.propTypes = {
    choosedNews: PropTypes.object

}
Details.propTypes = {
    dataOfNews: PropTypes.array

}

export default Details;