import React, { useContext } from 'react'
import "../assets/footer.css";
import { Theme } from '../context/ThemeContext';

const Footer = () => {
  const{dark} = useContext(Theme);
  return (
    <div className={dark?'footer-dark':'footer'}>
        <p> ❤️ <b> from Subramanya</b></p>
    </div>
  )
}

export default Footer