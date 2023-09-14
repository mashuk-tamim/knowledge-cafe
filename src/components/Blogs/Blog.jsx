import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='font-bold border-b-2 space-y-5 mb-5'>
            <img className='rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-5'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='text-gray-500'>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-1 items-center'>
                <p className='text-gray-500'>{reading_time} min read</p>
                <button onClick={()=>handleAddToBookmark(blog)} className='text-gray-500'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='text-gray-500'>
                {
                    hashtags.map((hashtag, index) => <span key={index}><a href=''>{hashtag} </a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time, id)} className='text-[#6047EC] underline pb-4'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;