import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const navlinks = [{
  to: "/q1",
  label: "Question 1"
}, {
    to: "/q2",
    label: "Question 2"
  }, {
    to: "/q3",
    label: "Question 3"
  }, {
    to: "/q4",
    label: "Question 4"
  }, {
    to: "/q5",
    label: "Question 5"
  }, ]
const Navbar = () => {
  const {pathname} = useLocation()
  
  return (
    <div className="navbar">
      <ul className='flex items-start justify-center gap-3'>
        {navlinks.map(link=> {
          return <li key={link.to} className={`navitem ${pathname === link.to ? "selected": ""}`}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Navbar