import { useEffect } from 'react'
import engineering1 from '../../../../assets/img/GallerySection/engineering1.jpg'
import engineering2 from '../../../../assets/img/GallerySection/engineering2.jpg'
import engineering3 from '../../../../assets/img/GallerySection/engineering3.jpg'
import math1 from '../../../../assets/img/GallerySection/math1.jpeg'
import math2 from '../../../../assets/img/GallerySection/math2.webp'
import math3 from '../../../../assets/img/GallerySection/math3.webp'
import science1 from '../../../../assets/img/GallerySection/science1.jpg'
import science2 from '../../../../assets/img/GallerySection/science2.jpg'
import science3 from '../../../../assets/img/GallerySection/science3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const GallerySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="w-10/12 mx-auto">
        <h2 className="text-center text-3xl font-bold">Gallery Section</h2>
        
      </div>
      <div>
        <p data-aos="fade-right" data-aos-duration="1000" className='my-10 px-5  mx-auto text-justify '>
          Step into a magical world filled with delightful toys designed
          especially for kids. Explore a colorful collection of educational and
          fun toys that will ignite their imagination and inspire learning. From
          adorable plush toys and interactive puzzles to exciting building sets
          and creative art supplies, our gallery offers a wide range of toys
          that will keep your child entertained and engaged. Watch their faces
          light up as they discover new toys that promote creativity,
          problem-solving, and exploration. Let their imaginations run wild and
          create unforgettable memories with our carefully selected toys. Enjoy
          the joy and wonder of childhood as you explore our Kid Toy Gallery!
        </p>

      </div>
      <div className='grid md:grid-cols-3 gap-6 mb-10 '>
        <div  className="hover:card sm-w-28 md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={engineering1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">STEAM Education Delivered to Your Door</h2>
            <p>Price: $40</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={engineering2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Funrally Construction Tools Kit Toy</h2>
            <p>Price: $60</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={engineering3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electronic Engineering Kits</h2>
            <p>Price: $60</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={math1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Math Toys and Math Learning for Kids</h2>
            <p>Price: $60</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={math2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Learning Resources</h2>
            <p>Price: $60</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={math3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Small Wooden Abacus - Classic Math Learning Toy for kids</h2>
            <p>Price: $80</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={science1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">20-in-1 Science Kit Building Toys</h2>
            <p>Price: $80</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={science2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">STEM Toys 6-in-1 Space Solar Robot Kit</h2>
            <p>Price: $50</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div  className="hover:card md:w-96 h-52 bg-white shadow-xl image-full overflow-hidden">
          <figure>
            <img
              src={science3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Thames & Kosmos</h2>
            <p>Price: $100</p>
            <p>Date: May/07/2023</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
