import styled from 'styled-components'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Arrow = styled(KeyboardArrowRightIcon)`
  color: black;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
`

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  background-image: url('https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdoaXRlJTIwYmFja2dyb3VuZCUyMHdpdGglMjBkb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding-top: 30px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`

const Tip = styled.div`
  display: flex;
  margin-bottom: 50px;
  gap: 50px;

  &:hover {
  }
`
const Left = styled.div`
  background-color: #d3d3d3;
  color: black;
  width: 20%;
  padding: 15px;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
  }
`
const Center = styled.div`
  background-color: #d3d3d3;
  color: black;
  padding: 15px;
  width: 20%;
  &:hover {
    background-color: white;
  }
`
const Right = styled.div`
  background-color: #d3d3d3;
  color: black;
  padding: 15px;
  width: 20%;
  &:hover {
    background-color: white;
  }
`
const Logo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
`
const Tit = styled.h2``
const Sum = styled.p`
  font-size: 20px;
`
const Div = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
`
const Read = styled.p``
const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  color: black;
`

const Spec = () => {
  return (
    <Cont>
      <Wrapper>
        <Title>Our Specialization</Title>
        <Tip>
          <Left>
            <Logo src='https://images.unsplash.com/photo-1467139840664-96b244a66825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRvb2wlMjBib3h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            <Tit>Risk Assessments and Entitlements</Tit>
            <Sum>
              Our team will clearly communicate to you the expectations, risks,
              and opportunities of your particular entitlement challenge.
            </Sum>
            <Div>
              <Read>Read More</Read>
              <Link
                to='/services'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <Arrow />
              </Link>
            </Div>
          </Left>
          <Center>
            <Logo src='https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2l0ZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <Tit>Project and Construction Management</Tit>
            <Sum>
              We provide owners with the day-to-day design management as part of
              a larger project.
            </Sum>
            <Div>
              <Read>Read More</Read>
              <Link
                to='/services'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                <Arrow />
              </Link>
            </Div>
          </Center>
          <Right>
            <Logo src='https://images.unsplash.com/photo-1488257907837-523fe2051fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2l0ZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <Tit>Site Selection</Tit>
            <Sum>
              We have a unique methodology for uncovering and “creating” new
              sites.We maintain full in-house real estate brokerage
              capabilities...
            </Sum>
            <Div>
              <Read>Read More</Read>
              <Link
                to='/services'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <Arrow />
              </Link>
            </Div>
          </Right>
        </Tip>
      </Wrapper>
    </Cont>
  )
}

export default Spec
