import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Cont = styled.div`
  display: flex;
  background-color: white;
  margin-top: 300px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`
const ImageDiv = styled.div`
  position: relative;
  text-align: center;
  max-width: 100vw;
`
const Image = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  opacity: 0.5;
`
const Ti = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Pa = styled.h3`
  font-size: 32px;
`
const Par = styled.h1`
  font-size: 48px;
`
const Loc = styled.h3`
  font-size: 32px;
`
const Btn = styled.button`
  padding: 15px;
  background-color: black;
  color: white;
  width: 200px;
  cursor: pointer;
  font-weight: bold;
`

const Hcont = () => {
  return (
    <Cont>
      <Wrapper>
        <ImageDiv>
          <Image src='https://images.unsplash.com/photo-1517732747537-877644b96f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHxtYW5zaW9uJTIwd2l0aCUyMHllbGxvdyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          <Ti>
            <Pa>Let's work together</Pa>
            <Par>(+234)-813-216-4381.</Par>
            <Loc>Ilorin, Nigeria</Loc>
            <Btn to='/contact'>
              <Link
                to='/contact'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                CONTACT US
              </Link>
            </Btn>
          </Ti>
        </ImageDiv>
      </Wrapper>
    </Cont>
  )
}

export default Hcont
