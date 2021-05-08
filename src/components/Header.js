import React from 'react'
import logo from '../pages/logo.svg'
import SearchInputs from './SearchInputs'

const Header = () => {
    return (
        <div className="nav-bar">
          <img src={logo} alt="logo" className="logo"/>        
          <SearchInputs/>                      
        </div>
    )
}

export default Header
