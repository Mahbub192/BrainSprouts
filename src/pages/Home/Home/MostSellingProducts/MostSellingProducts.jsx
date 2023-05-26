import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MostSellingProducts = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-3xl text-center  font-bold my-10">Most Selling Products</h1>
            <div className="flex flex-wrap">
            <div  className="relative md:w-1/2">
                <img src="https://cdn.shopify.com/s/files/1/0905/2012/files/s-kbanner-4.png" alt="" />
                <div className="absolute top-3 left-2 md:top-16 md:left-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#727E9A]">Learning <br />Through Play</h3>
                    <p className="text-gray-500 my-2">SALE PRICE</p>
                    <h4 className="text-xl text-red-500">$39.99</h4>
                </div>
            </div>
            <div  className="md:w-1/2">
            <div className="relative">
                <img src="https://cdn.shopify.com/s/files/1/0905/2012/files/s-kbanner-5.jpg" alt="" />
                <div className="absolute top-5 right-2 md:top-16 md:right-32">
                    <h3 className="text-xl md:text-2xl font-bold text-[#0350AC]">LNew Lego Toys <br />Collection</h3>
                </div>
            </div>
            <div className="relative mt-5">
                <img src="https://cdn.shopify.com/s/files/1/0905/2012/files/s-kbanner-6.png" alt="" />
                <div className="absolute top-6 left-5 md:top-16 md:left-10">
                    <h3 className="text-xl font-bold text-[#64756C]">Challenge <br />any Kid</h3>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default MostSellingProducts;