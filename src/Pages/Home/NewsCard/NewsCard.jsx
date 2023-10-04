import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ data }) => {
    const {_id, title, author, image_url, details, rating, total_view} = data;
    // console.log(data)
    return (
        <div >
            <div className="card card-compact bg-base-100 rounded-b-lg border  ">
                <div id="author" className='flex gap-6 items-center bg-[#F3F3F3] p-4 rounded-t-lg'>
                    <img className='rounded-full w-10 h-10' src={author.img} alt="author image" />
                    <div className='space-y-2'>
                        <p className='text-base font-semibold text-[#403F3F]'>{author.name}</p>
                        <p className='text-sm font-normal text-[#706F6F]'>{author.published_date}</p>
                    </div>

                </div>
                <div className='p-4'>
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className='p-4'>
                <figure ><img className="" src={image_url} alt="News" /></figure>
                </div>
                <div className="card-body p-4">
                    
                    <div className="text-[#706F6F] text-base font-semibold">
                        {details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-[#FF8C47]'>Read more...</Link></p>  : <p>{details}</p>}
                    </div>

                </div><div className='p-4'><hr /></div>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex items-center gap-4 '>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className=''>{rating.number}</p>
                    </div>
                    <div>
                        <p>{total_view}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};
NewsCard.propTypes = {
    data: PropTypes.object
}

export default NewsCard;