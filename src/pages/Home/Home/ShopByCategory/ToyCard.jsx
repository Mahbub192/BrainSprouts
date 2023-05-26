/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, picture, name, price, rating, details } = toy;
  const navigate = useNavigate();

  const handleNotificationAndNavigate = () => {
    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "You have to log in first to view details",
        icon: "error",
        confirmButtonText: "Cool",
      });
      navigate(``);
    }
  };
  return (
    <>
      <div className="card md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl h-56" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg">
            Price: $ <span className="text-red-800">{price}</span>
          </p>
          <p className="flex items-center gap-2 text-lg">
            Rating:
            <span className="text-yellow-600">
              <FaStar></FaStar>
            </span>{" "}
            <span>{rating}</span>
          </p>
          <p>
            Details:{" "}
            {details.length > 50 ? <>{details.slice(0, 50)}...</> : <>{ details }</>}
          </p>
          <div className="card-actions">
            <Link onClick={handleNotificationAndNavigate} to={`/viewToy/toys/${_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCard;
