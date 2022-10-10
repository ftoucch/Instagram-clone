import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";
const SignUp = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignup = async (e) => {
    e.preventDefault();
    const usernameExists = await doesUsernameExist(username);
    if (usernameExists) {
      setError("That username exist please try another");
    } else {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullname,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });
        navigate(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setEmailAddress("");
        setPassword(" ");
        setError(error.message);
      }
    }
  };
  useEffect(() => {
    document.title = "Sign up - Instagram";
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
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && (
            <p className="mt-4 text-xs text-red-primary mb-4">{error}</p>
          )}

          <form onSubmit={handleSignup} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <input
              aria-label="Enter your paswword"
              type="password"
              placeholder="Password"
              className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex rounded justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Have an account ? {` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
