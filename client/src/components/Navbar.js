import React, { useState } from 'react';

const Navbar = (props) => {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'Login', url: '/login' },
    { title: 'Inventory', url: '/bank' },
  ];

  return (
    <section className="navbar-container">
      <h1 className="heading heading-navbar">Défiance</h1>
      <div className="links-wrapper">
        {links.map((link, index) => {
          return <a className="link" href={link.url} key={index}>{link.title}</a>
        })}
      </div>
    </section>
  )
}

export default Navbar;
