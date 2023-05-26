import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import loginIcon from "../../assets/132033-green-login.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { auth, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  useTitle("Register");
  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    setError("");
    if (password.length < 6) {
      return setError("You need to provide password more then 6 character");
    }
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            Swal.fire({
              title: "success!",
              text: "Account created successfully !!",
              icon: "success",
              confirmButtonText: "Cool",
            });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="hero h-[calc(100vh-100px)] ">
      <div className="hero-content flex ">
        <div className="text-center  w-1/2">
          {/* <img className="w-[660px] h-[502px]" src={login} alt="" /> */}
          <Lottie animationData={loginIcon} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-lg ml-10 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <p className="text-lg text-red-500 text-center">{error}</p>
            <form onSubmit={handelRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error text-white">Register</button>
              </div>
            </form>
            <p className="text-center mt-8">
              Have an account?{" "}
              <Link to={`/login`} className="text-error font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
