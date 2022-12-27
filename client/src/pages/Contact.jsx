import React from 'react'
import Map from '../components/Map'
import styled from 'styled-components'
import { mobile } from '../response'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import ContactTop from '../components/ContactTop'

const Phone = styled(PhoneIcon)`
  margin-right: 20px;
  font-size: 16px;
`
const Location = styled(LocationOnIcon)`
  margin-right: 20px;
`
const Mail = styled(EmailOutlinedIcon)`
  margin-right: 20px;
`

const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 50px;
  flex-direction: column;
`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Total = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
  ${mobile({
    flexDirection: 'column',
  })}
`
const Left = styled.div`
  flex: 1;
  margin-left: 80px;
`

const Right = styled.div`
  flex: 2;
`
const Title = styled.h1`
  margin-bottom: 30px;
  ${mobile({
    padding: '15px',
  })}
`
const Div = styled.div``
const Span = styled.p`
  margin-top: 10px;
`
const Input = styled.input`
  margin-top: 10px;
  padding: 10px;

  width: 100%;
  margin-bottom: 20px;
  ${mobile({
    width: '90%',
  })}
`
const Message = styled.textarea`
  margin-top: 10px;
  padding: 10px;

  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  ${mobile({
    width: '90%',
  })}
`
const Button = styled.button`
  background-color: #ffd700;
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  margin-top: 0px;
  margin-right: 20px;
  margin-bottom: 30px;
`

const Form = styled.form`
  ${mobile({
    padding: '15px',
  })}
`
const LeftSub = styled.div`
  background-color: black;
  color: white;
`
const LeftCon = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`
const IDiv = styled.div``
const Up = styled.h3``
const Down = styled.p`
  font-size: 20px;
  font-weight: 400;
`

const ImageDiv = styled.div`
  position: relative;
  text-align: center;
  color: white;
  max-width: 100vw;
`
const Image = styled.img`
  width: 100%;
  max-width: 200vw;
  height: 50vh;
  object-fit: cover;
`
const Ti = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_deg0s1v',
        'template_1e0ja7l',
        formRef.current,
        'GQhEF6oBPCG2WErx3'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <Con>
      <ContactTop />
      <ContactWrapper>
        <Total>
          <Right>
            <Title>GET IN TOUCH</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Div>
                <Span>Name</Span>
                <Input
                  type='text'
                  placeholder='Enter your name'
                  required
                  name='user_name'
                />
              </Div>
              <Div>
                <Span>Email</Span>
                <Input
                  type='email'
                  placeholder='Enter a valid email address'
                  required
                  name='user_email'
                />
              </Div>
              <Div>
                <Span>Message</Span>
                <Message
                  placeholder='Type your message here'
                  required
                  name='message'
                />
              </Div>
              <Button>Submit</Button>
              {done && 'Thanks for contacting us'}
            </Form>
          </Right>
          <Left>
            <Title>CONTACT INFO</Title>
            <LeftSub>
              <LeftCon>
                <Phone />
                <IDiv>
                  <Up>Phone Number</Up>
                  <Down>+2348132163481</Down>
                </IDiv>
              </LeftCon>
              <LeftCon>
                <Mail />
                <IDiv>
                  <Up>Email Address</Up>
                  <Down>peterolatunji1@gmail.com</Down>
                </IDiv>
              </LeftCon>
              <LeftCon>
                <Location />
                <IDiv>
                  <Up>Address Info</Up>
                  <Down>Ibrahim Taiwo road Ilorin</Down>
                </IDiv>
              </LeftCon>
            </LeftSub>
          </Left>
        </Total>
        <Map />
      </ContactWrapper>
    </Con>
  )
}

export default Contact
