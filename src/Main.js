
import React, { useState } from "react";
import Menu from "./Menu"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
    return (
        <div id="backGround" style={{ backgroundColor: "#FAE6B1" }}>
            <div className="container">
                <div className="col-12">
                    <div className="d-flex row justify-content-center align-content-center">
                        <div className="logoUnderUnderBox text-center" style={{ marginTop: "50px", width: "283px", height: "68px", borderRadius: "20px", backgroundColor: "#FFA101" }}>
                            <div className="kotraBold" style={{ fontSize: "30px", color: "black", marginTop: "15px" }}>오뚜기 분식</div>
                        </div>
                        <div className="my-4"/>
                        <Menu name="김치찌개" price="6,000원" explain="매콤달달한 맛!" img="./asset/kimchiStew.png" thumb="1"></Menu>
                        <Menu name="김치찌개" price="6,000원" explain="매콤달달한 맛!" img="./asset/kimchiStew.png" thumb="1"></Menu>
                        <Menu name="김치찌개" price="6,000원" explain="매콤달달한 맛!" img="./asset/kimchiStew.png" thumb="1"></Menu>
                        <Menu name="김치찌개" price="6,000원" explain="매콤달달한 맛!" img="./asset/kimchiStew.png" thumb="1"></Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main