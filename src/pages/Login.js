import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from"react-redux";
// import { addToken } from "../redux/slices/app";
// import {useApi} from "../hooks/useApi";
import { NavHomeIcon } from "../images/Images";

function Login() {
  const headers = {};
  const toastMessages = {
    success : "Login Successfully",
  };
  // const { isLoading, error, data, sendRequest } = useApi('auth/login', 'POST', headers, toastMessages, "/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email,
      password
    };
    // await sendRequest(payload);
  };

  const handleClick = (e, path) => {
    e.preventDefault()
    navigate(path)
  }

  // useEffect(() => {
  //   if(data?.token) 
  //     dispatch(addToken(data?.token))
  //   console.log("data --",isLoading, error, data)
  // }, [data])

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-primary-dark">
      <div className="m-auto">
        <div className="max-w-md w-full md:w-[400px] mx-auto">
          <div className="bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-primary-dark">Login</h1>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline pr-10"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute top-0 right-0 mt-3 mr-4 focus:outline-none"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-600" />
                  )}
                </button>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                // disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:bg-slate-500"
              >
                <div className="flex justify-center items-center gap-5">{false && <FaSpinner className="animate-spin" />} <span>Login</span></div>
              </button>
            </form>
            <div className="mt-4 text-center">
              <div onClick={() => {}//router.push('/register')
              } 
              className="text-sm font-semibold text-gray-700 hover:text-blue-700" >
                Forgot your password?
              </div>
            </div>
            <div className="mt-2 text-center text-black">
             
                Don't have an account? <span onClick={() => navigate('/register')
                } className="text-sm font-semibold text-gray-700 hover:text-blue-700" >
                  Register
              </span>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs">
            &copy;2023 Company Name. All rights reserved.
          </div>
          <button className="flex justify-center items-center gap-5 w-fit h-fit mt-5 mx-auto" onClick={(e) => handleClick(e, '/')} ><NavHomeIcon className="flex justify-center items-center w-[30px] h-[30px]" /> <span>Home</span></button>
        </div>
      </div>
    </div>
  );
}

export default Login;
