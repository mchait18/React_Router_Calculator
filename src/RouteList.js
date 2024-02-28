import React from "react";
import { Route, Routes } from "react-router-dom";
import Operate from "./Operate";

function RouteList() {
    return (
        <Routes>
            <Route
                path="/:operation/:num1/:num2"
                element={<Operate />} />
        </Routes>
    );
}

export default RouteList;