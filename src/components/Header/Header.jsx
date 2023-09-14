import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center my-4 border-b-2 py-4'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-10' src={profile} alt="" />
        </header>
    );
};

export default Header;