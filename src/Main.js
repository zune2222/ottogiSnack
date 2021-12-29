
import React, { useState,useEffect } from "react";
import Menu from "./Menu"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollHorizontal from 'react-scroll-horizontal';
const Main = () => {
    return (
        <div id="backGround" style={{overflow:"hidden", backgroundColor: "white" }}>
            <div className="container-fluid">
                <div className="col-12">
                    <div className="d-flex row justify-content-center align-content-center">
                        <div className="d-flex justify-content-center">
                            <div className="text-center jangMi" style={{ fontSize: "70px", color: "black", marginTop: "15px" }}>오뚜기 분식</div>
                            <img style={{ width: "57px", height: "57px", marginLeft: "10px", marginTop: "45px" }} src="./asset/ottogiEggLogo.png"></img>
                        </div>
                        <img style={{ position: "absolute", width: "236px", height: "27px", top: "100px" }} src="./asset/menuUnderImg.svg"></img>
                        <div className="my-5" />
                        <div style={{ height: "700px" }}>
                            <ScrollHorizontal>
                                <Menu name="김치찌개" explain="매콤달달한 맛!" price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu name="김치찌개" explain="매콤달달한 맛!" price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu name="김치찌개" explain="매콤달달한 맛!" price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu name="김치찌개" explain="매콤달달한 맛!" price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu name="김치찌개" explain="매콤달달한 맛!" price="6,000원" img="./asset/kimchi.png" thumb="243" />
                            </ScrollHorizontal>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Main