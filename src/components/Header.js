import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import "../assets/main.css";
import Switch from "react-switch";
import { WeatherDataContext } from '../context/weatherDataContext';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <Switch checked={state.dark} onHandleColor="#000" offColor='#add8e6' onColor="#131862" checkedIcon={<FontAwesomeIcon style={{color:"#fff",padding:6}} icon={faMoon}/>}  uncheckedIcon={<FontAwesomeIcon style={{color:"#ffa500",padding:6}} icon={faSun}/>} onChange={()=>changeTheme()}/>
        </Container>
      </Navbar>
  )
}

export default Header;