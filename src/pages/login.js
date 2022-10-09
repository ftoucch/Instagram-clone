import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
const Login = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};
  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen ">
      <div className="flex w-3/5">
        <img
          src="images/iphone-with-profile.jpg"
          alt="iphone with instagram profile"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mt-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border-gray-primary rounded mb-2"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <input
              aria-label="Enter your paswword"
              type="password"
              placeholder="Password"
              className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border-gray-primary rounded mb-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Don&apos;t have an account ? {` `}
            <Link to="/signup" className="font-bold text-blue-medium">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// text-red-primary
// text-grey-base
// border-grey-primary

export default Login;