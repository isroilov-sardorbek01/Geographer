import React from "react";
import { useNavigate } from "react-router-dom";
import quit from "../images/quitImg.svg";


function Header() {
    const navigate = useNavigate();

    function handleNav(e) {
        e.preventDefault();
        const con = confirm("Are you sure , you want to quit?");
        if (con) {
            navigate("/login");
            localStorage.clear();
        }
    }
    return (
        <div className="signPage bg-[#2B3844] p-3 text-end gap-2">
            <div className="container flex justify-end gap-5 text-white ">
                <div
                    onClick={handleNav}
                    className="flex gap-3 cursor-pointer hover:underline"
                >
                    Quit
                    <img src={quit} width={30} height={30} alt="img" />
                </div>
            </div>
        </div>
    );
}

export default Header;
