import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOnline } from './custamHook/useRestraurent' 
import "../index.css"
 
const loggedUser = () => {
  return false
}
const Header=()=> {
  const [isLogin, setIslogin] = useState(true)
  // const [online,setonline]=useState(null)
  const online=useOnline()
  return (
    <div id='main'>
      <div ><img id='logo' src='https://img.freepik.com/free-vector/pack-flat-catering-logo-templates_23-2148999601.jpg?t=st=1753251451~exp=1753255051~hmac=bc390bcf023c2bf8b30bce62a60c585c345777dd6ee316c0f92b4218204fa51a&w=1380' alt="logo" width={75} border-radius={50} ></img></div>
      <div id='nav'>
        <ul id='navs'>
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact  </Link>
          <Link to="/about"> About </Link>

        </ul>
      </div>
      <h1>{online ? "online: ✅":"offline: ❌"}</h1>
      <h1>{isLogin ? "longin: ✅":"logout: ❌"}</h1>
      <div className='nav'>
        <div id="cart">Cart</div>
        <div>
          {isLogin ? (
            <button className='buttonSize' onClick={() => setIslogin(false)  }>Logout</button>
          ) : (
            <button className='buttonSize' onClick={() => setIslogin(true)  }>Login</button>
          )}
        </div>
      </div>


    </div>
  )
}

export default Header