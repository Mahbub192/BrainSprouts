import { FaBroadcastTower, FaLightbulb, FaRegHeart, FaRocket } from "react-icons/fa";


const SafeToy = () => {
    return (
        <div className="relative ">
            <img className="object-cover h-[calc(100vh-50px)] md:h-full" src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/bg-1.jpg?v=1613706944&width=1920" alt="" />
            <div className="absolute top-44 px-5 md:top-72 md:right-72 text-white">
                <h2 className="text-5xl font-bold">Safe toys for children</h2>
                <p className="flex items-center gap-8 my-4 text-xl md:text-2xl"><span><FaRocket/></span> Beautiful & well-designed</p>
                <p className="flex items-center gap-8 my-4 text-xl md:text-2xl"><span><FaLightbulb /></span>High durable toys</p>
                <p className="flex items-center gap-8 my-4 text-xl md:text-2xl"><span><FaBroadcastTower /></span>Recyclable materials</p>
                <p className="flex items-center gap-8 my-4 text-xl md:text-2xl"><span><FaRegHeart /></span>Safe & non-toxic</p>    
            </div>
        </div>
    );
};

export default SafeToy;