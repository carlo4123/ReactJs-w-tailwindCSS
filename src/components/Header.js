import React from 'react'
import Navigation from './Navigation'


function Header(){
    return (
        <div className="aborder-b  p-3 flex justify-between items-center">
        <span className="font-bold">Appname</span>
        
        <Navigation/>
        
        </div>
    )
}

export default Header