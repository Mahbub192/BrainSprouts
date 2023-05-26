import BImg from '../../../../assets/img/banner/banner.jpg'
const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#090909] to-[#261717] relative'>
            <img className='w-full h-screen md:h-[700px] object-cover opacity-30' src={BImg} alt="" />
            <div className='absolute px-5 md:pl-16 h-full left-0 top-5 md:top-16 md:w-8/12 '>
                <h1 className='text-white text-4xl md:text-6xl font-bold w-9/12 md:w-1/2'>Educational  Learning Toys</h1>
                <p className='md:w-9/12 text-gray-200 md:text-lg mt-5 text-justify'>Discover a world of learning and fun with educational toys! These remarkable playthings are designed to ignite curiosity, foster creativity, and inspire a love for learning in children. Whether it is building blocks that develop spatial awareness, puzzles that enhance problem-solving skills, or science kits that encourage scientific exploration, educational toys offer an engaging way for kids to acquire knowledge while having a blast. These toys promote critical thinking, improve fine motor skills, and nurture cognitive development, all while sparking joy and imagination. With educational toys, children can embark on exciting learning adventures that lay the foundation for a lifetime of growth and discovery.</p>
                <button className='bg-error text-white py-3 px-4 text-lg rounded-xl mt-5'>Read More</button>
            </div>
            
        </div>
    );
};

export default Banner;