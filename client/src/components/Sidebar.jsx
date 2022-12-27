import React from 'react'
import styled from 'styled-components'
import { mobile } from '../response'
import { Link } from 'react-router-dom'

import CloseIcon from '@mui/icons-material/Close'

const SidebarCont = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};

  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
  color: white;
`
const SiderbarWrapper = styled.div`
  color: white;
`
const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;

  ${mobile({
    gridTemplateRows: 'repeat(6, 60px)',
  })}
`
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    color: blue;
  }
`

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarCont isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SiderbarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='/'>
            Home
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/about'>
            About Us
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/services'>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/projects'>
            Projects
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/contact'>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
      </SiderbarWrapper>
    </SidebarCont>
  )
}

export default Sidebar
