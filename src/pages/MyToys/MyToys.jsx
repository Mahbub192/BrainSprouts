/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [error, setError] = useState("");
  const [modalToy, setModalToy] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState(1)

  useTitle('My Toys')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://toy-server-phi.vercel.app/myToy?email=${user?.email}&value=${value}`
      );
      const data = await response.json();
      setAllToys(data);
    }
    fetchData();
  }, [user,value]);

  const handleASingleToy = (id) => {
    fetch(`https://toy-server-phi.vercel.app/findToyById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalToy(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handelUpdate = (event) => {
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
    const category = selectedOption;
    const toyInfo = {
      seller,
      name,
      price,
      quantity,
      rating,
      email,
      picture,
      details,
      category,
    };
    fetch(`https://toy-server-phi.vercel.app/updateToy/${modalToy[0]?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Update successfully !!",
            icon: "success",
            confirmButtonText: "Cool",
          });

          fetch(`https://toy-server-phi.vercel.app/myToy?email=${user?.email}&value=${value}`)
            .then((res) => res.json())
            .then((data) => setAllToys(data))
            .catch(error => setError(error.message))
        }
      })
      .catch((error) => {
        setError("error", error.message);
      });
  };

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-server-phi.vercel.app/deleteToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remain = allToys.filter((toy) => toy._id !== id);
              setAllToys(remain);
            }
          })
          .catch((error) => {
            console.log("error", error.message);
          });
      }
    });
  };

  return (
    <>
      <div className="container mx-auto mt-10 h-[calc(100vh-200px)]">
        <div className="text-end my-8">
          <h1 className="font-bold text-lg mb-3">Short by toy price</h1>
          <button onClick={()=>setValue(1)} className="btn btn-primary ">ascending</button>
          <button onClick={()=>setValue(-1)} className="btn btn-primary ml-5">descending</button>
        </div>
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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allToys.map((toy) => (
                <tr key={toy._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={toy?.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">{toy?.name}</td>
                  <td>{toy?.category}</td>
                  <td>$ {toy?.price}</td>
                  <td className="pl-10">{toy?.quantity}</td>
                  <td>{toy?.seller}</td>
                  <th>
                    <label
                      onClick={() => handleASingleToy(toy._id)}
                      htmlFor="my-modal-5"
                      className="btn btn-primary"
                    >
                      Update
                    </label>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteToy(toy?._id)}
                      className="btn bg-red-400"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
      {/* Modal section to update toy  */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-9/12 max-w-7xl">
          <div>
            <div className="container mx-auto  flex">
              <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                <div className="card-body">
                  <h1 className="text-2xl font-bold text-center">
                    Update A Toy
                  </h1>
                  <p className="text-lg text-red-500 text-center">{error}</p>
                  <form onSubmit={handelUpdate}>
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
                          defaultValue={modalToy[0]?.seller}
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
                          defaultValue={modalToy[0]?.name}
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
                          defaultValue={modalToy[0]?.price}
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
                          defaultValue={modalToy[0]?.quantity}
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
                          defaultValue={modalToy[0]?.rating}
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
                          defaultValue={modalToy[0]?.email}
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
                          defaultValue={modalToy[0]?.picture}
                          placeholder="Photo Url"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="w-full">
                        <h2>Select a Category:</h2>
                        <select
                          className="w-full py-3 border-2 rounded-lg px-2"
                          value={selectedOption}
                          onChange={handleSelectChange}
                        >
                          <option value="">-- Select --</option>
                          <option value="Engineering Tools">
                            Engineering Tools
                          </option>
                          <option value="Engineering Kits">
                            Engineering Kits
                          </option>
                          <option value="Math Learning Toys">
                            Math Learning Toys
                          </option>
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
                        defaultValue={modalToy[0]?.details}
                        placeholder="Details"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-error text-white">
                        Update Toy
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToys;
