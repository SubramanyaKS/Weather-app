import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import "../assets/main.css";
import Switch from "react-switch";
import { WeatherDataContext } from '../context/weatherDataContext';

const Header = () => {
    const { state,dispatch} = useContext(WeatherDataContext);
    console.log(state.dark);
    const changeTheme=()=>{
      if(state.dark){
        dispatch({type:'SET_LIGHT', payload:false})
      }
      else{
        dispatch({type:'SET_DARK', payload:true})
      }
    }
  return (

    <Navbar bg={state.dark?"dark":"light"} variant={state.dark?"dark":"light"}>
        <Container>
          <Navbar.Brand href="#home">Weather App</Navbar.Brand>
          {/* <Switch checked={dark} onHandleColor="#000" offColor='#000' onColor="#fff" checkedIcon={false}  uncheckedIcon={false} onChange={()=>setDark((dark)=>!dark)}/> */}
          <Switch checked={state.dark} onHandleColor="#000" offColor='#000' onColor="#fff" checkedIcon={false}  uncheckedIcon={false} onChange={()=>changeTheme()}/>
        </Container>
      </Navbar>
  )
}

export default Header;