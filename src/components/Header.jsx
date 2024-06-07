import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import "../assets/main.css";
import { WeatherDataContext } from '../context/weatherDataContext';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ToggleSwitch} from 'reactjs-toggleswitch';
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
        <ToggleSwitch checked={state.dark} onToggle={changeTheme} thumbOnColor={'#000'} onColor="#131862" offColor='#add8e6'><FontAwesomeIcon style={{color:!state.dark?"#ffa500":"#fff"}} icon={!state.dark ? faSun : faMoon} /></ToggleSwitch>
        </Container>
      </Navbar>
  )
}

export default Header;