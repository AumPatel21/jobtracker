import React from "react";
import { FcGoogle } from "react-icons/fc";


const Signup = ({ onSwitchToLogin, OnSwitchToForgotPassword }) => {
    return (
        <div className="h-full flex justify-center items-center">
            <form className="w-[340px] md:w-[400px] flex flex-col justify-center items-center text-white bg-black/30 p-10 rounded-xl select-none">
                <h1 className="text-3xl font-bold mb-4">Sign Up</h1>

                {/* Email input */}
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="text" className="input" placeholder="user@email.com" />
                </fieldset>

                {/* Password input */}
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Password</legend>
                    <input type="password" className="input" placeholder="Password" />
                </fieldset>

                {/* Re-enter Password input */}
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Re-enter Password</legend>
                    <input type="password" className="input mb-5" placeholder="Re-enter Password" />
                </fieldset>

                {/* Login btn */}
                <button
                    type="submit"
                    className="btn btn-soft btn-primary btn-block px-4 py-3 text-sm font-semibold transition-transform rounded-md duration-300 ease-in-out hover:scale-105">Login
                </button>

                <span className="text-xs my-2">- or -</span>

                {/* Sign in with google btn */}
                <button
                    className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold bg-white text-black rounded-md transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300"
                >
                    <FcGoogle className="mr-2 text-lg" /> Sign up with Google
                </button>

                {/* Login redirect */}
                <p className="mt-4 text-xs">
                    Already have an account?
                    <a onClick={
                        (e) => {
                            e.preventDefault();
                            onSwitchToLogin();
                        }
                    } className="text-blue-500 hover:underline pl-1">Login</a>
                </p>

                {/* forgot pass redirect */}
                <p className="mt-1 text-xs">
                    <a onClick={
                        (e) => {
                            e.preventDefault();
                            OnSwitchToForgotPassword();
                        }
                    } className="text-blue-500 hover:underline">Forgot Password?</a>
                </p>
            </form>
        </div>
    );
}

export default Signup;