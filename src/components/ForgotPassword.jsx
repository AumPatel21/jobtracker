import React from "react";

const ForgotPassword = ({ onSwitchToLogin }) => {
    return (
        <div className="h-full flex justify-center items-center">
            <form className="w-[340px] md:w-[400px] flex flex-col justify-center items-center text-white bg-black/30 p-10 rounded-xl">
                <h1 className="text-3xl font-bold mb-4">Forgot Password?</h1>

                {/* Email input */}
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="text" className="input mb-5" placeholder="user@email.com" />
                </fieldset>

                {/* Login btn */}
                <button
                    type="submit"
                    className="btn btn-soft btn-primary btn-block px-4 py-3 text-sm font-semibold transition-transform rounded-md duration-300 ease-in-out hover:scale-105">Reset Password
                </button>

                <p className="mt-4 text-xs">
                    Already have an account?
                    <a
                        className="text-blue-500 hover:underline pl-1"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                onSwitchToLogin();
                            }
                        }>Login</a>
                </p>
            </form>
        </div>
    );
}

export default ForgotPassword;