import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginIcon from "../../assets/132033-green-login.json";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  useTitle('Login')
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('')
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "success!",
          text: "Account created successfully !!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          title: 'Error!',
          text: 'Login Failed !!',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
  };

  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
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
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <p className="text-lg text-red-500 text-center">{error}</p>
            <form onSubmit={handelLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error text-white">Login</button>
              </div>
            </form>
            <div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
              </div>
              <button
                onClick={handelGoogleLogin}
                className="flex items-center gap-4 py-2 text-white font-bold rounded-lg text-lg bg-error w-full justify-center"
              >
                <FaGoogle></FaGoogle> <span>Google Login</span>
              </button>
            </div>
            <p className="text-center mt-8">
              Have an account?{" "}
              <Link to={`/register`} className="text-error font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
