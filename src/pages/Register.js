import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordStrengthMeter from "../component/PasswordStrengthMeter";
import { useNavigate } from 'react-router-dom';
import { NavHomeIcon } from "../images/Images";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-primary-dark">
      <div className="m-auto">
        <div className="max-w-md w-full md:w-[400px] mx-auto">
          <div className="bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-primary-dark">Register</h1>
            <form onSubmit={handleSubmit}>
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
                <PasswordStrengthMeter passwordData={password} getPasswordStrengthScore={(score) => console.log(score)}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline pr-10"
                />

                </PasswordStrengthMeter>
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
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Register
              </button>
            </form>
            {/* <div className="mt-4 text-center">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700"
              >
                Forgot your password?
              </a>
            </div> */}
            <div className="mt-4 text-center text-black">
             
                Already have an account? <span
                onClick={() => navigate('/login')}
                className="text-sm font-semibold text-gray-700 hover:text-blue-700"
              >Login
              </span>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs">
            &copy;2023 Company Name. All rights reserved.
          </div>
          <button className="flex justify-center items-center gap-5 w-fit h-fit mt-5 mx-auto" onClick={(e) => navigate('/')} ><NavHomeIcon className="flex justify-center items-center w-[30px] h-[30px]" /> <span>Home</span></button>
        </div>
      </div>
    </div>
  );
}

export default Register;
