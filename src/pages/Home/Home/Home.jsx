import useTitle from "../../../hooks/useTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import GallerySection from "./GallerySection/GallerySection";
import MostSellingProducts from "./MostSellingProducts/MostSellingProducts";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import CustomerFavorites from "./CustomerFavorites/CustomerFavorites";
import SafeToy from "./SafeToy/SafeToy";
import ToyPlace from "./ToyPlace/ToyPlace";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <CustomerFavorites></CustomerFavorites>
            <GallerySection></GallerySection>
            <SafeToy></SafeToy>
            <ToyPlace></ToyPlace>
            <ShopByCategory></ShopByCategory>
            <MostSellingProducts></MostSellingProducts>
            
        </div>
    );
};

export default Home;