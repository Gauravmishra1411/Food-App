import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOnline } from './custamHook/useRestraurent'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [isLogin, setIslogin] = useState(true)
  const count = useSelector((store) => store.cart.value) // cart items
  const [showList, setshowList] = useState(false)
  const dispatch = useDispatch()
  const online = useOnline()

  const listHandler = () => {
    setshowList((prev) => !prev) // ✅ correct toggle
  }

  return (
    <div className='flex justify-evenly bg-gray-200 items-center hover:border-b-2'>
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img
            id='logo'
            src='https://img.freepik.com/free-vector/pack-flat-catering-logo-templates_23-2148999601.jpg?t=st=1753251451~exp=1753255051~hmac=bc390bcf023c2bf8b30bce62a60c585c345777dd6ee316c0f92b4218204fa51a&w=1380'
            alt="logo"
            width={75}
            className='rounded-full p-2 mr-4 fas fa-sync-alt animate-spin text-blue-600 text-2xl'
            onClick={() => window.location.reload()}
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className='font-mono'>
        <ul id='navs'>
          <Link className='mr-8' to="/home">Home</Link>
          <Link className='mr-8' to="/contact">Contact</Link>
          <Link className='mr-8' to="/about">About</Link>
          <Link className='mr-8' to="/xyz">Instamart</Link>
        </ul>
      </div>

      {/* Online / Login Status */}
      <h1>{online ? "online: ✅" : "offline: ❌"}</h1>
      <h1>{isLogin ? "login: ✅" : "logout: ❌"}</h1>

      {/* Cart + Login Button */}
      <div className='flex justify-evenly ml-5 relative'>
        <div className='mx-5 flex justify-center gap-2 font-bold'>
          Cart
          <button onClick={listHandler} className="flex items-center gap-1">
            <FaCartArrowDown /> {count.length}
          </button>
        </div>

        {/* Cart Dropdown */}
        {showList && (
          <div className="absolute top-12 right-0 bg-white shadow-lg p-4 rounded-lg w-56">
            <h2 className="font-bold mb-2">Cart Items</h2>
            {count.length > 0 ? (
              <ul className="list-disc pl-5">
                {count.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Cart is empty</p>
            )}
          </div>
        )}

        {/* Login/Logout Toggle */}
        <div>
          {isLogin ? (
            <button
              className='px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 focus:ring-2 focus:ring-purple-400 transition'
              onClick={() => setIslogin(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className='px-4 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:ring-2 focus:ring-purple-400 transition'
              onClick={() => setIslogin(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
