import styled from 'styled-components'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import AllProject from '../components/AllProject'
import Help from '../components/Help'

const Arrow = styled(KeyboardDoubleArrowRightIcon)`
  color: white;
  font-size: 20px;
  padding-left: 0px;
`

const Cont = styled.div`
  display: flex;
  background-color: white;
  margin-top: 10px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Projects = () => {
  return (
    <Cont>
      <Wrapper>
        <ImageDiv>
          <Image src='https://images.unsplash.com/photo-1594320990326-398050e0f31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGNvbnN0cnVjdGlvbiUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
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
              <Hb>Project</Hb>
            </Lin>
          </Ti>
        </ImageDiv>
        <AllProject />
        <Help />
      </Wrapper>
    </Cont>
  )
}

export default Projects
