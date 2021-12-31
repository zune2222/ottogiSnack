
import React, { useState,useEffect } from "react";
import Menu from "./Menu"
import "./App.css"
import firebaseInit from "./firebaseInit"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollContainer from 'react-indiana-drag-scroll';

const Main = () => {
    console.log(firebaseInit);
    
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
                        <div style={{ height: "100%" }}>
                            <ScrollContainer vertical={false}>
                                <div class="scrollMenu" style={{display: "flex", padding: "20px", width: "100%"}}>
                                <Menu id="1" name="김치찌개" explain="매콤달달한 맛!" detail='집 김치찌개가 생각나는 오뚜기 분식의 시그니처입니다.' price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu id="2" name="test" explain="매콤달달한 맛!" detail='집 김치찌개가 생각나는 오뚜기 분식의 시그니처입니다.' price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu id="3" name="test2" explain="매콤달달한 맛!" detail='집 김치찌개가 생각나는 오뚜기 분식의 시그니처입니다.' price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu id="4" name="test3" explain="매콤달달한 맛!" detail='집 김치찌개가 생각나는 오뚜기 분식의 시그니처입니다.' price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                <Menu id="5" name="test4" explain="매콤달달한 맛!" detail='집 김치찌개가 생각나는 오뚜기 분식의 시그니처입니다.' price="6,000원" img="./asset/kimchi.png" thumb="243" />
                                </div>
                            </ScrollContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Main