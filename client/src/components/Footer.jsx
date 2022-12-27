import React from 'react'
import styled from 'styled-components'
import SendSharpIcon from '@mui/icons-material/SendSharp'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import { Link } from 'react-router-dom'
import { mobile } from '../response'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { motion } from 'framer-motion'

const Location = styled(LocationOnOutlinedIcon)`
  background-color: black;
  color: #ffd700;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  padding-left: 0px;
`
const Phone = styled(LocalPhoneOutlinedIcon)`
  padding: 10px;
  background-color: black;
  color: #ffd700;
  cursor: pointer;
  padding-left: 0px;
`
const Mail = styled(EmailOutlinedIcon)`
  padding: 10px;
  background-color: black;
  color: #ffd700;
  cursor: pointer;
  padding-left: 0px;
`

const Send = styled(SendSharpIcon)`
  padding: 10px;
  background-color: white;
  cursor: pointer;
`
const Face = styled(FacebookIcon)`
  padding: 10px;
  background-color: black;
  color: #ffd700;
  cursor: pointer;
  padding-left: 0px;
`
const Like = styled(LinkedInIcon)`
  padding: 10px;
  background-color: black;
  color: #ffd700;
  cursor: pointer;
`
const Twit = styled(TwitterIcon)`
  padding: 10px;
  background-color: black;
  color: #ffd700;
  cursor: pointer;
`
const Google = styled(GoogleIcon)`
  padding: 10px;
  background-color: black;
  color: #ffd700;
  cursor: pointer;
`
const Git = styled(GitHubIcon)`
  padding: 10px;
  background-color: black;
  color: #ffd700;
  cursor: pointer;
`

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  margin-top: 150px;
  margin-bottom: 0px;
  position: relative;
`
const FootWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Top = styled.div``
const News = styled.div`
  background-color: #ffd700;
  color: black;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: 80px;
`
const NLeft = styled.div``
const Head = styled.h1``
const SubH = styled.p``
const NRight = styled.div`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  height: 40px;
  background-color: black;
  color: white;
  border: none;
  width: 400px;
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`
const Left = styled.div`
  flex: 1;
  margin-bottom: 20px;
`
const Logo = styled.div``
const Desc = styled.p`
  font-size: 20px;
`
const IconDiv = styled(motion.div)``
const Center = styled.div`
  flex: 1;
  margin-bottom: 20px;
`
const Para = styled(motion.p)`
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 20px;
  ${mobile({
    fontSize: '18px',
  })}
`
const Header = styled.h1`
  margin-bottom: 20px;
  ${mobile({
    marginBottom: '10px',
    fontSize: '24px',
  })}
`
const Hd = styled.div`
  display: flex;
  align-items: center;
`
const Par = styled.p`
  font-size: 20px;
  ${mobile({
    fontSize: '18px',
  })}
`

const Right = styled.div`
  flex: 1;
  margin-bottom: 20px;
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
  color: #ffd700;
`
const Lp = styled.p`
  color: #ffd700;
  font-size: 20px;
`

const Footer = () => {
  return (
    <Foot>
      <FootWrap>
        <Top>
          <News>
            <NLeft>
              <Head>SUBSCRIBE TO OUR NEWSLETTER!</Head>
              <SubH>
                Never Miss Anything From Dalmoore By Signing Up To Our
                Newsletter.
              </SubH>
            </NLeft>
            <NRight>
              <Input placeholder='Enter your email' />
              <Send />
            </NRight>
          </News>
        </Top>
        <Bottom>
          <Left>
            <Logo>
              <Log>
                <Lo>TC</Lo>
                <Lp>Tk Constructions</Lp>
              </Log>
            </Logo>
            <Desc>
              Today we can tell you, thanks to your passion, hard work
              creativity, and expertise, you delivered us the most beautiful
              house great looks.
            </Desc>
            <IconDiv>
              <Face />
              <Like />
              <Twit />
              <a
                href='https://github.com/petolatunji'
                relative='path'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                target='_blank'
                rel='noreferrer'
              >
                <Google />
              </a>
              <a
                href='https://github.com/petolatunji'
                relative='path'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                target='_blank'
                rel='noreferrer'
              >
                <Git />
              </a>
            </IconDiv>
          </Left>
          <Center>
            <Header>Contact Us</Header>
            <Hd>
              <Location />
              <Par>Ibrahim Taiwo road Ilorin</Par>
            </Hd>
            <Hd>
              <Mail />
              <Par>peterolatunji1@gmail.com</Par>
            </Hd>
            <Hd>
              <Phone />
              <Par>+2348132163481</Par>
            </Hd>
          </Center>
          <Right>
            <Header>Useful Links</Header>
            <Para
              whileHover={{ color: '#ffd700', scale: '1.3', originX: 0 }}
              transition={{ type: 'spring', stiffness: '300' }}
            >
              <Link
                to='/about'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                About
              </Link>
            </Para>
            <Para
              whileHover={{ color: '#ffd700', scale: '1.3', originX: 0 }}
              transition={{ type: 'spring', stiffness: '300' }}
            >
              <Link
                to='/contact'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Contact Us
              </Link>
            </Para>
            <Para
              whileHover={{ color: '#ffd700', scale: '1.3', originX: 0 }}
              transition={{ type: 'spring', stiffness: '300' }}
            >
              <Link
                to='/projects'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Projects
              </Link>
            </Para>
            <Para
              whileHover={{ color: '#ffd700', scale: '1.3', originX: 0 }}
              transition={{ type: 'spring', stiffness: '300' }}
            >
              <Link
                to='/services'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Services
              </Link>
            </Para>
          </Right>
        </Bottom>
      </FootWrap>
    </Foot>
  )
}

export default Footer
