import React from 'react'
import styled from 'styled-components'
import Construct from '../components/Construct'

import Service from '../components/Service'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

const Arrow = styled(KeyboardDoubleArrowRightIcon)`
  color: white;
  font-size: 20px;
  padding-left: 0px;
`

const Cont = styled.div`
  display: flex;

  background-color: white;
  margin-top: 10px;
  margin-bottom: 50px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 50px;
`
const ImageDiv = styled.div`
  position: relative;
  text-align: center;
  color: white;
  max-width: 100vw;
`
const Image = styled.img`
  width: 100vw;

  height: 50vh;
  object-fit: cover;
`

const Work = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  max-width: 1400px;
`
const Left = styled.div``
const Photo = styled.img``
const Right = styled.div``
const Head = styled.h1`
  font-size: 36px;
`
const Para = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
`
const Ti = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Th = styled.h1``
const Lin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Hb = styled.p`
  font-size: 20px;
`

const About = () => {
  return (
    <Cont>
      <Wrapper>
        <ImageDiv>
          <Image src='https://images.unsplash.com/photo-1669136289290-7b650ca91f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI3fHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          <Ti>
            <Th>ALWAYS DEDICATED AND DEVOTED</Th>
            <Lin>
              <Link
                to='/'
                style={{
                  textDecoration: 'none',
                  color: '#ffd700',
                  fontSize: '20px',
                }}
              >
                Home
              </Link>
              <Arrow />
              <Hb>Services</Hb>
            </Lin>
          </Ti>
        </ImageDiv>
        <Work>
          <Left>
            <Photo src='https://images.unsplash.com/photo-1645434897689-af222b85993e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l2aWwlMjBlbmdpbmVlcmluZyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </Left>
          <Right>
            <Head>In our work we have pride, quality is what we provide.</Head>
            <Para>
              focusing on business expansion through innovative engineering and
              technology, operating with high ethical standard and integrity,
              Ensuring that highest standards of safety and environmental
              management are complied with while providing specialized,
              fit-for-purpose equipment, supported by well trained and motivated
              employees, and returning profits to our company”.
            </Para>
          </Right>
        </Work>
        <Construct />
        <Service />
      </Wrapper>
    </Cont>
  )
}

export default About
