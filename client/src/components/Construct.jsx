import React from 'react'
import styled from 'styled-components'

const Con = styled.div`
  display: flex;
  width: 100vw;
  background-color: black;
  margin-bottom: 0px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
`
const Div = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`
const Head = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 50px;
`
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`
const Image = styled.img`
  width: 30%;
  object-fit: cover;
`
const Construct = () => {
  return (
    <Con>
      <Wrapper>
        <Div>
          <Head>We are all constructed out of our self dialogue.</Head>
          <Images>
            <Image src='https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbnNpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />

            <Image src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hY2dpbmVyeSUyMG9uJTIwc2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />

            <Image src='https://images.unsplash.com/photo-1577896021507-78957e4b77d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l2aWwlMjBlbmdpbmVlcmluZyUyMHNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          </Images>
        </Div>
      </Wrapper>
    </Con>
  )
}

export default Construct
