import PropTypes from 'prop-types';

SpentTime.propTypes = {
    readingTime: PropTypes.number.isRequired,
};

function SpentTime({readingTime}) {
    return (
        <div className='md:w-full text-[#6047EC] bg-gray-200 p-5 rounded-lg'>
            <p className='text-xl font-bold'>Spent time on read: {readingTime}</p>
        </div>
    );
}

export default SpentTime;