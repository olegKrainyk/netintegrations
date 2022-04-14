import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as Scroll from 'react-scroll'


const NavBtnS = styled.div`
    position: fixed;
    top: 30px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 10px;
    filter: drop-shadow(0 0 1px black);

  div {
    width: 30px;
    height: 3px;
    background-color: ${({ open }) => open ? 'var(--main-color)' : 'var(--accent1-color)'};
    margin: 4px 0;
    border-radius: 3px;
    transform-origin: 0;
    transition: all 0.5s cubic-bezier(0.645, 0.3, 0.2, 1.1);

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      display: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}

`;


const Navs = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.90);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    opacity: ${({ open }) => open ? 1 : 0};
    pointer-events: ${({ open }) => open ? 'all' : 'none'};
    display: flex;
    flex-direction: column;
    z-index: 500;
    transition: all 0.5s cubic-bezier(0.645, 0.3, 0.2, 1.1);
    padding-left: 30px;
    padding-top: 90px;
    border-right: 2px solid var(--main-color);

    .nav-link-small {
        color: var(--accent1-color);
        padding: 5px 0;
        font-size: 18px;
        cursor: pointer;
        display: block;
        transition-duration: 0.2s;
        font-weight: 300;
    }

    .nav-link-big {
        color: var(--accent1-color);
        padding: 9px 0;
        margin-top: 4px;
        font-size: 22px;
        cursor: pointer;
        transition-duration: 0.2s;
        display: block;
        font-weight: 700;
    }
    .nav-link-small:hover {
        padding-left: 6px;
        color: #B3B6B7;
    }
    .nav-link-big.a-active:hover, .nav-link-small.a-active:hover {
        color: var(--main-color);
    }

    .a-active {
        color: var(--main-color);
        font-weight: 700;
    }



    @keyframes dropdown {
      0% {
          transform: translateY(-40px);
          opacity: 0;
          pointer-events: none;
      }
      100% {
          transform: translateY(0);
          pointer-events: none;
          opacity: 1;
      }
  }

  
  .nav-triangle {
      display: inline-block;
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition-duration: 0.5s;
      margin-left: 7px;
  }
  .dropdown.first .nav-triangle {
    color: ${({ nav1open }) => nav1open ? 'var(--main-color)' : 'var(--accent1-color)'};
    transform: ${({ nav1open }) => nav1open ? 'rotate(180deg)' : 'rotate(0)'} ;
    pointer-events: ${({ nav1open }) => nav1open ? 'all' : 'none'};
  }
  .dropdown.second .nav-triangle {
    color: ${({ nav2open }) => nav2open ? 'var(--main-color)' : 'var(--accent1-color)'};
    transform: ${({ nav2open }) => nav2open ? 'rotate(180deg)' : 'rotate(0)'} ;
    pointer-events: ${({ nav2open }) => nav2open ? 'all' : 'none'};
  }
  .dropdown.third .nav-triangle {
    color: ${({ nav3open }) => nav3open ? 'var(--main-color)' : 'var(--accent1-color)'};
    transform: ${({ nav3open }) => nav3open ? 'rotate(180deg)' : 'rotate(0)'} ;
    pointer-events: ${({ nav3open }) => nav3open ? 'all' : 'none'};
  }



  .dropdownContent {
    padding-left: 10px;
  }
  .dropdownContent.first {
    animation: ${({ nav1open }) => nav1open ? 'dropdown 0.8s' : 'none'};
    animation-iteration-count: 1;
    display: ${({ nav1open }) => nav1open ? 'block' : 'none'};
  }
  .dropdownContent.second {
    animation: ${({ nav2open }) => nav2open ? 'dropdown 0.8s' : 'npne'};
    animation-iteration-count: 1;
    display: ${({ nav2open }) => nav2open ? 'block' : 'none'};
  }
  .dropdownContent.third {
    animation: ${({ nav3open }) => nav3open ? 'dropdown 0.8s' : 'none'};
    animation-iteration-count: 1;
    display: ${({ nav3open }) => nav3open ? 'block' : 'none'};
  }
`;





const NavBtn = () => {
  //state for menu
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)


  //state for NavLinks
  const [nav1open, setNav1open] = useState(false)
  const [nav2open, setNav2open] = useState(false)
  const [nav3open, setNav3open] = useState(false)


  const scroll = Scroll.animateScroll;

  const scrollUp = function () {
    scroll.scrollTo('App', { duration: 0 });
  }

  const NavClick = () => {
    handleClick();
    scrollUp();
  }

//
  const NavDropdown1Click = () => {
    setNav1open(!nav1open);
  }
  const NavDropdown2Click = () => {
    setNav2open(!nav2open);
  }
  const NavDropdown3Click = () => {
    setNav3open(!nav3open);
  }

  return (
    <>
      <NavBtnS className='menuBtn' open={open} nav1open={nav1open} nav2open={nav2open} nav3open={nav3open} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </NavBtnS>



      {/* nav bar */}

      <Navs open={open} nav1open={nav1open} nav2open={nav2open} nav3open={nav3open} className='nav-bar-resp'>
        <NavLink exact to="/" activeClassName="a-active" className='nav-link-big' onClick={NavClick}>Home</NavLink>
        <div className='dropdown first nav-link-big' onClick={NavDropdown1Click}>Network Services<span className='nav-triangle'>&#9662;</span></div>
        <div className='dropdownContent first'>
          <NavLink to="/network-design" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Network design</NavLink>
          <NavLink to="/virtualization-technologies" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Virtualization technologies</NavLink>
          <NavLink to="/system-integrations" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>System integrations</NavLink>
        </div>
        <div className='dropdown nav-link-big second' onClick={NavDropdown2Click}>Network Security<span className='nav-triangle'>&#9662;</span>
        </div>
        <div className='dropdownContent second'>
          <NavLink to="/network-security-audit" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Network security audit</NavLink>
          <NavLink to="/hipaa-security-assessment" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Hipaa security assessment</NavLink>
          <NavLink to="/intrusion-prevention-system" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Intrusion Prevention System</NavLink>
          <NavLink to="/firewall-protection" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Firewall protection</NavLink>
        </div>
        <div className='dropdown nav-link-big third' onClick={NavDropdown3Click}>Support<span className='nav-triangle'>&#9662;</span>
        </div>
        <div className='dropdownContent third'>
          <NavLink to="/it-outsourcing-services" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>IT outsourcing Services</NavLink>
          <NavLink to="/network-support" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Network support</NavLink>
          <NavLink to="/remote-support" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Remote support</NavLink>
          <NavLink to="/apple-computer-support" activeClassName="a-active" className='nav-link-small' onClick={NavClick}>Apple computer support</NavLink>
        </div>

        <NavLink to="/service-plans" activeClassName="a-active" className='nav-link-big' onClick={NavClick}>Service plans</NavLink>
      </Navs>


    </>
  )
}

export default NavBtn;
