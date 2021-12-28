 
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function Menu(data){
    const {name,explain,price,img,thumb}=data;
    return (
        <div>
            <div style={{ marginTop:"10px",marginBottom:"10px", marginLeft: "auto", marginRight: "auto", borderRadius: "25px", width: "321px", height: "203px", backgroundColor: "white", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                <div className="d-flex justify-content-center">
                    <div className="row" style={{width:"150px"}}>
                        <div className="ibm" style={{ fontSize: "30px", marginTop: "25px"}}>{name}</div>
                        <div className="ibm" style={{ fontSize: "25px", marginLeft:"15px"}}>{price}</div>
                    </div>
                    <img className="picture my-3" src={img} />
                </div>
                <div className="d-flex justify-content-center">
                    <div className="ibm" style={{ fontSize: "20px"}}>{explain}</div>
                    <div className="text-center"style={{fontSize:"20px",color:"white",marginLeft:"15px",backgroundColor:"#FFA101",width:"103px",height:"31px", borderRadius:"40px" ,boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>👍🏻 {thumb}</div>
                </div>
            </div>
        </div>
    )
}
export default Menu;