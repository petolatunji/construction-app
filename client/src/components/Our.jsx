import styled from 'styled-components'
import { motion } from 'framer-motion'
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Total = styled.div``
const Head = styled(motion.h1)`
  font-size: 40px;
  ::first-letter {
  }
`
const Three = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50px;
`
const Left = styled.div`
  background-color: #fafafa;
  padding: 50px;
  padding-right: 150px;
`
const Lh = styled(motion.h3)`
  color: #ffd700;
  cursor: pointer;
`
const Lp = styled(motion.h3)`
  margin-top: 30px;
  cursor: pointer;
`
const Center = styled.div``
const Right = styled.div``
const Image = styled.img`
  object-fit: cover;
  width: 400px;
  height: 300px;
`

const Our = () => {
  return (
    <Cont>
      <Wrap>
        <Total>
          <Head>Our Project</Head>
          <Three>
            <Left>
              <Lh>ALL</Lh>
              <Lp
                whileHover={{
                  scale: 1.1,
                  color: '#ffd700',
                  originX: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                OFFICE
              </Lp>
              <Lp
                whileHover={{
                  scale: 1.1,
                  color: '#ffd700',
                  originX: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                COMMERCIAL
              </Lp>
              <Lp
                whileHover={{
                  scale: 1.1,
                  color: '#ffd700',
                  originX: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                RESIDENTIAL
              </Lp>
              <Lp
                whileHover={{
                  scale: 1.1,
                  color: '#ffd700',
                  originX: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                HOTELS
              </Lp>
            </Left>
            <Center>
              <Image src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnNpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            </Center>
            <Right>
              <Image src='https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            </Right>
          </Three>
        </Total>
      </Wrap>
    </Cont>
  )
}

export default Our
