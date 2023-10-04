import PropTypes from 'prop-types';

const EditorsInsight = ({data}) => {
    const { thumbnail_url, title} = data;
    return (
        <div>
            <div className='w-60'>
                <img className=' w-full h-40' src={thumbnail_url} alt="" />
                <div className='mt-5'>
                    <h1>{title}</h1>

                </div>
            </div>

        </div>
    );
};

EditorsInsight.propTypes = {
    data: PropTypes.object

}

export default EditorsInsight;