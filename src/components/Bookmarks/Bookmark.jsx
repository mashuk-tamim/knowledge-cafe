import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='font-bold p-3 bg-white rounded-lg my-2'>
            <h5>{bookmark.title}</h5>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;