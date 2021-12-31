 
import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function Menu(data){
    const {id,name,explain,detail,price,img,thumb}=data;
    return (
        <div>
            <Link to={{
                pathname:`/menu/${id}`,
                state:{
                    name:name,
                    explain:explain,
                    detail:detail,
                    price:price,
                    img:img,
                    thumb:thumb
                },
            }} style={{textDecoration:'none', color : 'black'}}  //링크 다니까 파란 글자+밑줄이 되길래 임시로 추가했어요! 나중에 css파일에 옮겨야 할 듯
            >
            <div className="mx-2" style={{ marginTop: "10px", marginBottom: "10px", width: "188px", height: "315px", backgroundColor: "white" }}>
                <img className="picture" src={img} style={{ marginLeft:"20px", width: "165px", height: "176px", zIndex: "99" }} />
                <div style={{ marginTop:"-80px",width: "188px", height: "30vh", borderRadius: "25px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
                    <div className="d-flex justify-content-center" >
                        <div className="row mx-4">
                            <div className="my-4"></div>
                            <div className="anSsang" style={{ fontSize: "30px", marginTop: "25px" }}>{name}</div>
                            <div className="anSsang" style={{ fontSize: "20px" ,color:"rgba(0, 0, 0, 0.6)" }}>{explain}</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="anSsang" style={{ fontSize: "25px"}}>{price}</div>
                        <div style={{ backgroundImage:`url("./asset/heart.svg")`, marginLeft:"43px",marginTop:"10px",width: "24px",height: "21px",fontSize:"8px",color:"white"}}><div className="text-center" style={{marginTop:"2px"}}>{thumb}</div></div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}
export default Menu;