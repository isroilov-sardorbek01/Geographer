import React from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";
import darkImg from "../images/darkImg1.svg";
import lightImg from "../images/LigthImg1.svg";

function HeaderHome() {
    const { theme, setTheme } = useContext(ThemeContext);

    function handleChangeTheme(e) {
        e.preventDefault();
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <div>
            <div className="shadow header mb-20  text-black home dark:text-white dark:bg-[#2B3844]">
                <div className="container mb-[48px] flex justify-between p-[23px] head-container bg-white dark:bg-[#2B3844] ">
                    <div className="text-[#111517] text-[24px] font-[800] dark:text-white">
                        Where in the world?
                    </div>
                    <div className="flex items-center gap-3 sameHeader">
                        <img
                            onClick={handleChangeTheme}
                            className="cursor-pointer"
                            src={theme === "light" ? darkImg : lightImg}
                            width={30}
                            height={30}
                            alt="img"
                        />
                        <div className="">
                            {theme === "light" ? "Dark mode " : "Light mode"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;
