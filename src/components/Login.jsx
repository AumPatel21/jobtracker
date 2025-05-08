import React from "react";
import { FcGoogle } from "react-icons/fc";


const Login = ({ onSwitchToSignup, OnSwitchToForgotPassword }) => {
    return (
        <div className="h-full flex justify-center items-center">
            <form className="w-[340px] md:w-[400px] flex flex-col justify-center items-center text-white bg-black/30 p-10 rounded-xl select-none">
                <h1 className="text-3xl font-bold mb-4">Login</h1>

                {/* Email input */}
                {/* <label htmlFor="username" className="mb-2 text-sm">Email</label>
                <input type="email" placeholder="Email" className="border border-gray-300 w-full h-10 p-2 mb-4 rounded-md bg-white text-black" /> */}

                {/* Email input */}
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="text" className="input" placeholder="user@email.com" />
                </fieldset>

                {/* Password input */}
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" className="input mb-5" placeholder="Password" />
                </fieldset>

                {/* Login btn */}
                <button type="submit" className="btn btn-soft btn-primary btn-block px-4 py-3 text-sm font-semibold transition-transform rounded-md duration-300 ease-in-out hover:scale-105">Login</button>

                <span className="text-xs my-2">- or -</span>

                {/* Sign in with google btn */}
                <button
                    className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold bg-white text-black rounded-md transition-transform duration-300 ease-in-out hover:scale-105 border"
                >
                    <FcGoogle className="mr-2 text-lg" /> Sign in with Google
                </button>
                <p className="mt-4 text-xs">
                    Don't have an account?
                    <a onClick={
                        (e) => {
                            e.preventDefault();
                            onSwitchToSignup();
                        }
                    } className="text-blue-500 hover:underline pl-1">Sign Up</a>
                </p>

                <p className="mt-1 text-xs">
                    <a onClick={
                        (e) => {
                            e.preventDefault();
                            OnSwitchToForgotPassword();
                        }
                    } className="text-blue-500 hover:underline"> Forgot Password?</a>
                </p>
            </form>
        </div>
    );
}

export default Login;