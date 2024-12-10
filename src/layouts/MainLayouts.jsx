import React from "react";
import Header from "../components/Header";
import HeaderHome from "../pages/HeaderHome";

function MainLayouts({ children }) {
    return (
        <div className="box-border p-0 m-0">
            <Header></Header>
            <HeaderHome/>
            <main>{children}</main>
        </div>
    );
}

export default MainLayouts;
