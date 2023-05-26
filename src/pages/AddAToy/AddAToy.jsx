import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
  const {user} = useContext(AuthContext)
  const [error, setError] = useState("");
  useTitle('Add A Toy')
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = form.sellerName.value;
    const name = form.toyName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const email = form.email.value;
    const picture = form.photo.value;
    const details = form.details.value;
    const category = selectedOption
    const toyInfo={seller, name, price, quantity, rating, email, picture, details, category};

    fetch(`https://toy-server-phi.vercel.app/addToy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.acknowledged){
            Swal.fire({
                title: "success!",
                text: "Toy added successfully !!",
                icon: "success",
                confirmButtonText: "Cool",
              });
        }
      })
      .catch((error)=>{
        setError(error.message)
      });
  };

  return (
    <div className="container mx-auto mt-10 flex">
      <div className="card flex-shrink-0 w-full  ml-10 shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Add A Toy</h1>
          <p className="text-lg text-red-500 text-center">{error}</p>
          <form onSubmit={handelRegister}>
            <div className="flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  placeholder="Seller Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  type="text"
                  name="toyName"
                  placeholder="Toy Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  required
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex items-end gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Url</span>
                </label>
                <input
                  type="url"
                  required
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
              </div>
              <div className="w-full">
              <h2>Select a Category:</h2>
                <select className="w-full py-3 border-2 rounded-lg px-2" value={selectedOption} onChange={handleSelectChange}>
                  <option value="">-- Select --</option>
                  <option value="Engineering Tools">Engineering Tools</option>
                  <option value="Engineering Kits">Engineering Kits</option>
                  <option value="Math Learning Toys">Math Learning Toys</option>
                  <option value="Science Kits">Science Kits</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error text-white">Add Toy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
