import React from 'react';
import './custom-button.css'
const containerStyle = {
    width: '268px',
    height: '95px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px',
    boxSizing: 'border-box',
    margin:'5px'
};

const circleStyle = {
    width: '70px',
    height: '70px',
    backgroundColor: '#F15F2B',
    borderRadius: '50%',
    textAlign:'center',
    margin:'10px'
};

const textStyle = {
    color: '#463F3F',
    fontSize: '24',
    fontFamily:'vazir',
    fontWeight:700,
};
const tabaghe ={
    color:'white',
    fontFamily: 'vazir',
    fontWeight: 400,
    fontSize: '16px',
    textAlign:'center',
    marginTop:'5px',
}
const Number ={
    color:'white',
    fontFamily:'vazir',
    fontWeight:700,
    fontSize:'40px',
    marginTop: '-2px'
}
export default function Floor({FloorNumber})
{
    const floorInformation=[{FloorNum:"۱" ,FloorLable:"تولید محتوا"}
    ,{FloorNum:"۲" ,FloorLable:"کارآموز"}
    ,{FloorNum:"۳" ,FloorLable:"توسعه دهنده"}
    ,{FloorNum:"۴" ,FloorLable:"خلاقیت"}
    ,{FloorNum:"۵" ,FloorLable:"مسئله علمی"}
    ,{FloorNum:"۶" ,FloorLable:"مدیریت"}
    ,{FloorNum:"۷" ,FloorLable:"طرح مسئله"}];
    if(FloorNumber==1){
        return(<div style={{...containerStyle,borderRadius:'0px 8px 0px 0px',justifyContent:'flex-end'}}>
            <div style={textStyle}>{floorInformation[FloorNumber-1].FloorLable}</div>
            <div style={circleStyle}><div style={tabaghe}>طبقه</div><div style={Number}>{floorInformation[FloorNumber-1].FloorNum}</div></div>
        </div>)
    }else if(FloorNumber>1&&FloorNumber<7){
        return (
            <div style={{...containerStyle,justifyContent:'flex-end'}}>
                <div style={textStyle}>{floorInformation[FloorNumber-1].FloorLable}</div>
                <div style={circleStyle}><div style={tabaghe}>طبقه</div><div style={Number}>{floorInformation[FloorNumber-1].FloorNum}</div></div>
            </div>
        );
    }else if(FloorNumber==7){
        return(
            <div style={{...containerStyle,borderRadius:'0 0 8px 0',justifyContent:'flex-end'}}>
                <div style={textStyle}>{floorInformation[FloorNumber-1].FloorLable}</div>
                <div style={circleStyle}><div style={tabaghe}>طبقه</div><div style={Number}>{floorInformation[FloorNumber-1].FloorNum}</div></div>
            </div>
        )
    }
    

}
// const Floor = {TopFloor,MiddleFloor,BottomFloor}
// export default TopFloor ;
