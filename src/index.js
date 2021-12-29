import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Main from "./Main";
import Detail from "./Detail";

ReactDom.render(
    <BrowserRouter >
        <Routes>
            <Route exact={true} path="/" element={<Main/>}/>
            <Route path="/menu/:id" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>, 
    document.getElementById("root")
);