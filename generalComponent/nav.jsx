import React from 'react'
import logo from "../assets/nav/ai-image-logo.svg";
import { Link } from 'react-router-dom';

function Nav({styleNav}) {
  return (
    <ul className={`h-[100%] w-[70%] flex items-center gap-10 ${styleNav}  *:capitalize *:text-white`}>
    <li>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </li>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/features">features</Link>
    </li>
    <li>
      <Link to="/">process</Link>
    </li>
    <li>
      <Link to="/">pricing</Link>
    </li>
    <li>
      <Link to="/">blog</Link>
    </li>
  </ul>
  )
}

export default Nav