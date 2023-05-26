/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ToyTable = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { _id, category, name, picture, price, quantity } = toy;
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
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="font-bold">{name}</td>
      <td>{category}</td>
      <td>$ {price}</td>
      <td className="pl-10">{quantity}</td>
      <td>{toy?.seller}</td>
      <th>
        <Link
          onClick={handleNotificationAndNavigate}
          to={`/viewToy/toys/${_id}`}
          className="btn btn-primary"
        >
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default ToyTable;
