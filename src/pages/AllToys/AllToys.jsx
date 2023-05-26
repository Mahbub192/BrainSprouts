/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import loadingfild from '../../assets/99274-loading.json';
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const {loading} = useContext(AuthContext)
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const { totalToy } = useLoaderData();
  useTitle('All Toys')

  const item = Math.ceil(totalToy / itemsPerPage);

  const pageNumber = [...Array(item).keys()];


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://toy-server-phi.vercel.app/allToy?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setAllToys(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);


  const handleSearch = () => {
    fetch(`https://toy-server-phi.vercel.app/getToyBySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      }).catch((error)=>console.log(error.message));
  };

  
    if(allToys.length == 0){
      return <Lottie className="h-[calc(100vh-200px)]" animationData={loadingfild} loop={true} />
    }
  

  return (
    <>
      <div className="container mx-auto flex items-center gap-3 w-96 mt-10">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search Toy Name"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Toy Image</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Seller Name</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((toy) => (
                <ToyTable key={toy._id} toy={toy}></ToyTable>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mb-6">
        {pageNumber.map((number) => (
          <button
            key={number}
            className={currentPage === number ? "bg-[#FF9900] px-3 py-2" : "px-3 py-2"}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
      </div>
    </>
  );
};

export default AllToys;
