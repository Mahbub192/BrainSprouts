import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ViewToy = () => {
  const toy = useLoaderData();
  const { category, details, name, picture, price, quantity, rating, seller } =
    toy[0];
  return (
    <div className="flex gap-10 container mx-auto items-center ">
      <div className="w-5/12">
        <img className="h-[calc(100vh-200px)]" src={picture} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-xl font-bold">Seller Name: {seller}</h1>
        <h2 className="text-lg font-bold">Name: {name}</h2>
        <p className="font-bold">Category: {category}</p>
        <p className="mt-2">Price : $ {price}</p>
        <p className="mt-2">Quantity: {quantity}</p>
        <p className="flex gap-2 items-center mt-2">
          Rating:{" "}
          <span>
            <FaStar></FaStar>
          </span>{" "}
          <span>{rating}</span>
        </p>
        <p className="w-9/12 text-justify leading-relaxed my-2">Details: {details}</p>
        <Link to={`/`} className="btn btn-primary">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ViewToy;
