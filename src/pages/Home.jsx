import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import countries from "../countries.json";

function Home() {
    const navigate = useNavigate();

    function handleOpenCard(id) {
        navigate(`/flag/${id}`);
    }
    return (
        <div className="dark:bg-[#202C36] dark:text-white container flex flex-wrap pb-5 overflow-x-hidden justify-between cards gap-[20px] ">
            {countries.length > 0 &&
                countries.map((data, index) => {
                    return (
                        <div
                            onClick={() => {
                                handleOpenCard(data.id);
                            }}
                            className="card cursor-pointer hover:shadow-2xl transition-shadow w-[264px]  rounded-[5px] shadow-lg bg-white dark:bg-[#2B3844]"
                            key={index}
                        >
                            <img
                                className="rounded-t-[5px] w-full bg-cover"
                                src={data.flag}
                                alt="img"
                            />
                            <div className="p-4 innerCard">
                                <div>{data.country}</div>
                                <div className="">
                                    <span>Population:</span> {data.population}
                                </div>
                                <div className="">
                                    <span>Region:</span> {data.region}
                                </div>
                                <div className="">
                                    <span>Capital:</span> {data.capital}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Home;
