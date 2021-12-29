import React from "react";
import "./Detail.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history}=this.props;   
    }
    render(){
        const {location}=this.props;
        console.log(this.props);
        console.log(this.location);
        let name='김치찌개';    //왜인지 props 값이 제대로 불러와지지 않아서 임시로 변수를 선언해줬습니다
        let explain='매콤달달한 맛!';
        let detail='집 김치찌개가 생각나는 오뚜기 분식의 시그니처입니다.';
        let price=6000;
        let img='./asset/kimchi.png';
        let thumb=243;
        let mat='맛있어요';
        let yang='적당해요';
        let gasungbi='만족해요';

        return (<div class='main'>
        <header style={{ backgroundImage:`url("../asset/detailHeader.svg")`, backgroundRepeat:"repeat-x"}}>
            <img src="..\asset\arrow.svg"></img>
            <div style={{ backgroundImage:`url("../asset/whiteHeart.svg")`, backgroundRepeat:"no-repeat", width:"5vh",height:"5vh",float:'right', textAlign:"center",border:'solid 1px',fontSize:"8px",color:"rgba(255, 215, 72, 1)"}}>{thumb}</div>
        </header>
        <div class='content'>
        <img class='foodimg' src="..\asset\kimchi.png"></img>
        <div class='info'>
            <span class="anSsang" style={{ fontSize: "45px", marginTop: "25px" }}>{name}</span>
            <span class="anSsang" style={{ fontSize: "40px",float:'right'}}>{price}원</span>
            <div class="anSsang" style={{ fontSize: "20px" ,color:"rgba(0, 0, 0, 0.6)"}}>{explain}</div>
            <div class="anSsang" style={{ fontSize: "20px" ,color:"rgba(0, 0, 0, 0.6)"}}>{detail}</div>
        </div>
        <img src="..\asset\reviewIcon.svg"></img>
        <div class="allReviewBox">
            
            <table>
                <tr>
                    <td>맛</td>
                    <td>양</td>
                    <td>가성비</td>
                </tr>
                <tr>
                    <td>{mat}</td>
                    <td>{yang}</td>
                    <td>{gasungbi}</td> 
                </tr>
            </table>
        </div>
        <div class='dotsImg'>
            <img src="..\asset\dots.svg"></img>
        </div>
        <div class="selectBox">
            <div class="circle">맛</div>
            <div class="selectors">
                <table>
                    <tr>
                        <td>
                            <button>맛있어요<br/><img src='..\asset\good.svg'></img></button>
                        </td>
                        <td>
                            <button>괜찮아요<br/><img src='..\asset\ok.svg'></img></button>
                        </td>
                        <td>
                            <button>맛없어요<br/><img src='..\asset\bad.svg'></img></button>
                        </td>
                    </tr>
                    
                </table>
                
            </div>   
        </div>
        <div class="selectBox">
            <div class="circle">양</div>
            <div class="selectors">
            <table>
                    <tr>
                    <td>
                            <button>많아요<br/><img src='..\asset\good.svg'></img></button>
                        </td>
                        <td>
                            <button>적당해요<br/><img src='..\asset\ok.svg'></img></button>
                        </td>
                        <td>
                            <button>적어요<br/><img src='..\asset\bad.svg'></img></button>
                        </td>
                    </tr>
                </table>
            </div>   
        </div>
        <div class="selectBox">
            <div class="circle" style={{fontSize:"12px"}}>가성비</div>
            <div class="selectors">
            <table>
                    <tr>
                        <td>
                            <button>만족해요<br/><img src='..\asset\good.svg'></img></button>
                        </td>
                        <td>
                            <button>무난해요<br/><img src='..\asset\ok.svg'></img></button>
                        </td>
                        <td>
                            <button>별로에요<br/><img src='..\asset\bad.svg'></img></button>
                        </td>
                    </tr>
                </table>
            </div>   
        </div>
        <button class="submit">
        <img src="..\asset\submit.svg"></img>
        </button>
        </div>

        <footer>
            부산광역시 금정구 장전동 어쩌구저쩌구
            <br/>
            Tel : 051-513-5640
            <br/>
            계좌 이체 : ~~~
        </footer>
        </div>
        );
    }
}
export default Detail;