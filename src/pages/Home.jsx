import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ForgotPassword from "../components/ForgotPassword";
import Navbar from "../components/Navbar";

const Home = () => {
    // State to manage which form is active
    const [activeForm, setActiveForm] = useState("login");
    // <Navbar />
    return (
        <div className="relative w-full h-screen">
            <Navbar />
            <div className="h-full flex items-center justify-center">

                {activeForm === "login" && (
                    <Login
                        onSwitchToSignup={() => setActiveForm("signup")}
                        OnSwitchToForgotPassword={() => setActiveForm("forgotPassword")}
                    />
                )}
                {activeForm === "signup" && (
                    <Signup
                        onSwitchToLogin={() => setActiveForm("login")}
                        OnSwitchToForgotPassword={() => setActiveForm("forgotPassword")}
                    />
                )}
                {activeForm === "forgotPassword" && (
                    <ForgotPassword
                        onSwitchToLogin={() => setActiveForm("login")}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;