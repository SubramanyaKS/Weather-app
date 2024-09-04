import { useContext } from "react";
import { WeatherDataContext } from "../context/weatherDataContext";

export const useHeader = ()=>{
    const { state,dispatch} = useContext(WeatherDataContext);
    const changeTheme=()=>{
      if(state.dark){
        dispatch({type:'SET_LIGHT', payload:false})
      }
      else{
        dispatch({type:'SET_DARK', payload:true})
      }
    }
    return {changeTheme,state}
}