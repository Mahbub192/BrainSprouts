import useTitle from "../../../hooks/useTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import GallerySection from "./GallerySection/GallerySection";
import MostSellingProducts from "./MostSellingProducts/MostSellingProducts";
import ShopByCategory from "./ShopByCategory/ShopByCategory";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <MostSellingProducts></MostSellingProducts>
            
        </div>
    );
};

export default Home;