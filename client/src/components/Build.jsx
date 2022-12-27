import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

const Add = styled(AddIcon)`
  color: white;
  background-color: #ffd700;
  font-size: 50px;
  padding: 35px;
  cursor: pointer;
  font-weight: bold;
  height: 80px;
  transition: 0.5s ease-in-out;
`

const Ser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 80px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Total = styled.div`
  display: flex;
  gap: 30px;
`
const Image = styled.img`
  object-fit: cover;
  height: 400px;
  width: 310px;
  display: block;
`
const Div = styled.div`
  background-color: #d9dddc;
  height: 360px;
  width: 350px;
  padding: 20px;
`
const Di = styled.div`
  background-color: white;
  padding: 5px;
`
const Btn = styled.button`
  border: none;
  color: white;
  background-color: #ffd700;
  padding: 16px 16px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.5s ease;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 50px;
  &:hover {
    background-color: white;
    color: black;
  }
`
const Pa = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 32px;
`
const Paa = styled.p`
  font-size: 18px;
  margin-top: 0px;
`
const To = styled.div`
  position: relative;
  &:hover {
    opacity: 1;
  }
`
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  background: white;
  width: 300px;
  height: 75px;
  transition: 0.5s ease-in-out;
  opacity: 0;
  color: black;
  font-size: 20px;
  padding: 10px;
  padding-right: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  &:hover {
    opacity: 1;
  }
`
const Pp = styled.div``
const Pc = styled.p`
  text-align: start;
`
const Po = styled.h2`
  margin: 0;
`

const Build = () => {
  return (
    <Ser>
      <Container>
        <Total>
          <To>
            <Image src='https://plus.unsplash.com/premium_photo-1661499575649-e9d534f64ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJ1aWxkaW5nJTIwcGxhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <Overlay>
              <Pp>
                <Po>Architecture </Po>
                <Pc>Life is Architecture.</Pc>
              </Pp>
              <Link
                to='/about'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: '20px',
                }}
              >
                <Add />
              </Link>
            </Overlay>
          </To>
          <To>
            <Image src='https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmclMjBwbGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            <Overlay>
              <Pp>
                <Po>Construction </Po>
                <Pc>Dreams with us.</Pc>
              </Pp>
              <Link
                to='/about'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: '20px',
                }}
              >
                <Add />
              </Link>
            </Overlay>
          </To>
          <To>
            <Image src='https://images.unsplash.com/photo-1614690762798-6c41431e8a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhaW50aW5nJTIwd2FsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            <Overlay>
              <Pp>
                <Po>Renovation </Po>
                <Pc> Dazzling Design</Pc>
              </Pp>
              <Link
                to='/about'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: '20px',
                }}
              >
                <Add />
              </Link>
            </Overlay>
          </To>
          <Div>
            <Di>
              <Pa>Building It better in concrete.</Pa>
              <Paa>
                When it comes to your house, don’t mess with the rest, trust the
                best. Making your vision come true, that is what we do.
              </Paa>
              <Link
                to='/about'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: '20px',
                }}
              >
                <Btn>View All</Btn>
              </Link>
            </Di>
          </Div>
        </Total>
      </Container>
    </Ser>
  )
}

export default Build
