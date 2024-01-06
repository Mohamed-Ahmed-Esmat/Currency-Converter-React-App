import Btn from "./Btn";
import React from "react";
import { Link } from "react-router-dom";

function LandingBox() {
    return (
        <div className="relative w-3/4 h-3/4 bg-gradient-to-b from-purple-700 via-purple-600 to-indigo-900 rounded-lg shadow-md flex flex-col justify-between items-center p-8">
            <div>
                <p className="text-6xl font-bold font-goblin-one break-words text-center">
                    <span className="text-red-300">C</span>on
                    <span className="text-red-300">C</span>urrency
                </p>
            </div>
            <div>
                <p className="text-center text-red-300 text-4xl font-bold font-palatino break-words">Make informed financial decisions. Reliable currency conversion, always.</p>
            </div>
            <div>
                <Link to="/currency"><Btn text="Get Started" /></Link>
            </div>
        </div>
    );
}

export default LandingBox;