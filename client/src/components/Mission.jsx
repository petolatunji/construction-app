import styled from 'styled-components'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Link } from 'react-router-dom'

const Arrow = styled(KeyboardArrowRightIcon)`
  color: black;
  cursor: pointer;
  font-size: 20px;
  padding-left: 0px;
`
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 50px;
  background-image: url('https://plus.unsplash.com/premium_photo-1661499220812-705293e1ec6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29uc3RydWN0aW9uJTIwd29ya2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
  background-repeat: no-repeat;
  padding-top: 30px;
  background-size: cover;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Total = styled.div``
const Head = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-bottom: 50px;
`
const Sub = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
`
const Left = styled.div`
  flex: 1;
  color: black;
  background-color: whitesmoke;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  background-color: black;
  padding: 30px;
  flex: 1;
`
const Image = styled.img`
  object-fit: cover;
  height: 70vh;
`
const Title = styled.h1`
  margin-bottom: 30px;
  color: white;
`
const Div = styled.div``
const Span = styled.p`
  color: white;
`
const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid white;
  background-color: black;
  color: white;
  width: 100%;
`
const Message = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
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

const Form = styled.form``
const Hea = styled.h1``
const Par = styled.p`
  font-size: 20px;
`
const Pa = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Li = styled.p`
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #ffd700;
  }
`

const Mission = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Cont>
      <Wrapper>
        <Total>
          <Head>Our Mission</Head>
          <Sub>
            <Left>
              <Hea>What we serve</Hea>
              <Par>
                From inception to completion, our team is involved every step of
                the way: pre-construction planning, obtaining entitlements,
                budget development and execution, scheduling, contract
                procurement, and close-out.
              </Par>
              <Pa>
                <Arrow />
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '20px',
                  }}
                >
                  <Li>Strategic Planning and Business Case Development</Li>
                </Link>
              </Pa>
              <Pa>
                <Arrow />
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '20px',
                  }}
                >
                  <Li>Strategic Planning and Business Case Development</Li>
                </Link>
              </Pa>
              <Pa>
                <Arrow />
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '20px',
                  }}
                >
                  <Li>Contract Administration</Li>
                </Link>
              </Pa>
              <Pa>
                <Arrow />
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '20px',
                  }}
                >
                  <Li>Strategic Planning and Business Case Development</Li>
                </Link>
              </Pa>
              <Pa>
                <Arrow />
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '20px',
                  }}
                >
                  <Li>Lead consultation</Li>
                </Link>
              </Pa>
            </Left>
            <Center>
              <Image src='https://images.unsplash.com/photo-1603093946405-e3629b722cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwdG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            </Center>
            <Right>
              <Title>GET IN TOUCH</Title>
              <Form onSubmit={handleSubmit}>
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
                  <Span>Phone</Span>
                  <Input
                    type='email'
                    placeholder='Enter phone number'
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
              </Form>
            </Right>
          </Sub>
        </Total>
      </Wrapper>
    </Cont>
  )
}

export default Mission
