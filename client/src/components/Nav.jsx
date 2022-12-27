import styled from 'styled-components'
import { mobile } from '../response'
import { Link } from 'react-router-dom'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit'
import { motion } from 'framer-motion'

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: white;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 30px;
  ${mobile({
    transition: '0.8s all ease',
  })}
`
const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
`
const NavLogo = styled(Link)`
  color: #ffd700;
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
  ${mobile({
    marginLeft: '20px',
  })}
`
const Log = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Lo = styled.h1`
  border-radius: 50%;
  border: 7px solid #ffd700;
  padding: 12px;
  font-size: 24px;
`
const Lp = styled.p``

const MobileIcon = styled.div`
  display: none;

  ${mobile({
    display: 'block',
    position: 'absolute',
    top: '20px',
    right: '20px',
    transform: 'translate(-100,60%)',
    fontSize: '28px',
    cursor: 'pointer',
    color: 'black',
    margiRight: '20px',
  })}
`
const NavMenu = styled.ul`
  align-items: center;
  list-style: none;
  align-items: center;
  margin-right: -22px;
  display: flex;

  ${mobile({
    display: 'none',
  })}
`
const NavItem = styled(motion.li)`
  height: 80px;
`
const NavLinks = styled(Link)`
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  text-decoration: none;
  height: 100%;
  font-size: 20px;
  margin-right: 30px;
  font-weight: bold;
  &:active {
    color: #ffd700;
  }
  &:hover {
    color: #ffd700;
  }
`

const Nav = ({ toggle }) => {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavLogo to='/'>
            <Log>
              <Lo>TC</Lo>
              <Lp>Tk Constructions</Lp>
            </Log>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <HorizontalSplitIcon />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>About Us</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/projects'>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/contact'>Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Navbar>
    </>
  )
}

export default Nav
