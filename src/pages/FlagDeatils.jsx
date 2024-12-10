import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import countries from "../countries.json";
import img1 from "../images/iconLeft.svg";
import { Link } from "react-router-dom";

function FlagDetails() {
    const { id } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const filteredCountry = countries.filter((country) => {
            return country.id === Number(id);
        });
        setCountry(filteredCountry);
    }, [id]);

    return (
        <div className="container w-full pb-20 dark:text-white">
            <div className="text-start">
                <Link
                    to="/"
                    className=" p-3 w-[100px] rounded-md bg-black text-white gap-3 dark:hover:dark:bg-[#2B3844] flex mb-[80px] dark:bg-black dark:text-white"
                >
                    <img src={img1} alt="image" width={25} height={25} />
                    Back
                </Link>
            </div>
            <div className="">
                {country.length > 0 &&
                    country.map((data, index) => (
                        <div className="flex items-center justify-between" key={index}>
                            <div className="">
                                <img className="rounded-md"
                                    src={data.flag}
                                    width={450}
                                    height={450}
                                    alt={data.country}
                                />
                            </div>
                            <div className="right">
                                <h1 className="text-[70px]">{data.country}</h1>
                                <h2 className="text-[20px]" >Capital: {data.capital}</h2>
                                <h2 className="text-[20px]">Population: {data.population}mln</h2>
                                <h2 className="text-[20px]">Region: {data.region}</h2>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default FlagDetails;
