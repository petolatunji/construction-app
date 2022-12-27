import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar'
import '../help.css'

const Ser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 50px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Map = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  display: flex;
  flex: 1;
  background-color: black;

  justify-content: space-between;
  color: white;

  flex-direction: column;
  padding: 20px;
  width: 100%;
`
const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const Our = styled.h1``
const Par = styled.p`
  margin-bottom: auto;
  font-size: 20px;
`
const Btn = styled.button`
  border: none;
  color: white;
  background-color: #ffd700;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.5s ease;
  font-weight: bold;
  margin-bottom: 20px;
  width: max-content;
  margin-top: 50px;
  &:hover {
    background-color: white;
    color: black;
  }
`
const Exp = styled.h1`
  margin-top: 0;
`
const Pb = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const Span = styled.h2``

const Help = () => {
  return (
    <Ser>
      <Container>
        <Map>
          <Left>
            <Our>Let's help you!</Our>
            <Par>Our team will handle all aspect including</Par>
            <Par>bid/award of contracts, management of</Par>
            <Par>contracts, RFI and submittal trafficking,</Par>
            <Par> payment applications, and close out.</Par>
            <Link
              to='/contact'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '20px',
              }}
            >
              <Btn>Contact Us</Btn>
            </Link>
          </Left>
          <Right>
            <Exp>We have 11 years experience in construction</Exp>
            <Pb>
              <Span>Construction</Span>
              <ProgressBar
                completed={50}
                bgColor='#ffd700'
                height='15px'
                labelColor='black'
                labelSize='20px'
                transitionDuration='5s'
                transitionTimingFunction='ease-in-out'
                labelAlignment='outside'
                animateOnRender='true'
              />
            </Pb>
            <Pb>
              <Span>Consulting</Span>
              <ProgressBar
                completed={65}
                bgColor='#ffd700'
                height='15px'
                labelColor='black'
                labelSize='20px'
                transitionDuration='5s'
                transitionTimingFunction='ease-in-out'
                labelAlignment='outside'
                animateOnRender='true'
              />
            </Pb>
            <Pb>
              <Span>Design</Span>
              <ProgressBar
                completed={90}
                bgColor='#ffd700'
                height='15px'
                labelColor='black'
                labelSize='20px'
                transitionDuration='5s'
                transitionTimingFunction='ease-in-out'
                labelAlignment='outside'
                animateOnRender='true'
              />
            </Pb>
          </Right>
        </Map>
      </Container>
    </Ser>
  )
}

export default Help
