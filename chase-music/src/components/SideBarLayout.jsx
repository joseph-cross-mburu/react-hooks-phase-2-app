import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLayout = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to='./components/About'>About</Link></li>
        <li><Link to='./components/ContactUs'>Contact us</Link></li>
        <li><Link to='./components/Register'>Register/</Link></li>
      </ul>
    </aside>
    
  )
}

export default SidebarLayout;