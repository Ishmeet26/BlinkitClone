import React from 'react'
import { useSelector } from 'react-redux'
import blinkitLogo from '../assets/blinkit.svg'
import './styles.css'
const Header = () => {
  const { cart } = useSelector((state) => state.shop)
  return (
    <header className='header'>
      <div className='header-left'>
        <img src={blinkitLogo} alt="blinkitLogo" />
      </div>

      <div>Cart : {cart.reduce((total, item) => total + (item.quantity || 0), 0)}</div>
    </header>
  )
}

export default Header;