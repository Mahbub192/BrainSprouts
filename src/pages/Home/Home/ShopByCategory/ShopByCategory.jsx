import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState("Science Kits");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    if (tabIndex == 0) {
      setCategory("Science Kits");
    } else if (tabIndex == 1) {
      setCategory("Math Learning Toys");
    } else if (tabIndex == 2) {
      setCategory("Engineering Kits");
    } else if (tabIndex == 3) {
      setCategory("Engineering Tools");
    }
  }, [tabIndex]);

  useEffect(() => {
    fetch(`https://toy-server-phi.vercel.app/allToyByCategory/${category}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [category]);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-center text-3xl font-bold mb-8">Shop by category</h1>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Science Kits</Tab>
        <Tab>Math Learning Toys</Tab>
        <Tab>Engineering Kits</Tab>
        <Tab>Engineering Tools</Tab>
      </TabList>
      <TabPanel>
        <div data-aos="fade-right" data-aos-duration="1000" className='grid md:grid-cols-3 gap-6'>
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
        </div>
      </TabPanel>
      <TabPanel>
      <div data-aos="fade-right" data-aos-duration="1000" className='grid md:grid-cols-3 gap-6'>
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
        </div>
      </TabPanel>
      <TabPanel>
      <div data-aos="fade-right" data-aos-duration="1000" className='grid md:grid-cols-3 gap-6'>
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
        </div>
      </TabPanel>
      <TabPanel>
      <div data-aos="fade-right" data-aos-duration="1000" className='grid md:grid-cols-3 gap-6'>
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
        </div>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default ShopByCategory;