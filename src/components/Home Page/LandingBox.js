import Btn from "./Btn";
import React from "react";
import { Link } from "react-router-dom";

function LandingBox() {
    return (
        <div className="relative w-3/4 h-3/4 bg-gradient-to-b from-purple-700 via-purple-600 to-indigo-900 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-black font-goblin-one break-words">ConCurrency</p>
            <p className="text-center text-red-600 text-2xl font-bold font-palatino break-words">Make informed financial decisions. Reliable currency conversion, always.</p>
            <Link to="/currency"><Btn text="Get Started" /></Link>
        </div>
    );
}

export default LandingBox;