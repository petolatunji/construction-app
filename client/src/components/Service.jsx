import React from 'react'
import styled from 'styled-components'
import HouseSidingIcon from '@mui/icons-material/HouseSiding'
import EngineeringIcon from '@mui/icons-material/Engineering'
import ApartmentIcon from '@mui/icons-material/Apartment'
import TungstenIcon from '@mui/icons-material/Tungsten'
import CarpenterIcon from '@mui/icons-material/Carpenter'
import HandymanIcon from '@mui/icons-material/Handyman'
import FireTruckIcon from '@mui/icons-material/FireTruck'

const House = styled(HouseSidingIcon)`
  background-color: #ffd700;
  border-radius: 50%;
  padding: 40px;
  margin-top: 20px;
`
const Eng = styled(EngineeringIcon)`
  background-color: #ffd700;
  margin-top: 20px;
  border-radius: 50%;
  padding: 40px;
`
const Apart = styled(ApartmentIcon)`
  background-color: #ffd700;
  margin-top: 20px;
  border-radius: 50%;
  padding: 40px;
`
const Tung = styled(TungstenIcon)`
  background-color: #ffd700;
  margin-top: 20px;
  border-radius: 50%;
  padding: 40px;
`
const Car = styled(CarpenterIcon)`
  background-color: #ffd700;
  margin-top: 20px;
  border-radius: 50%;
  padding: 40px;
`
const Hand = styled(HandymanIcon)`
  background-color: #ffd700;
  margin-top: 20px;
  border-radius: 50%;
  padding: 40px;
`
const Fire = styled(FireTruckIcon)`
  background-color: #ffd700;
  margin-top: 20px;
  border-radius: 50%;
  padding: 40px;
`

const Ser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Map = styled.div``
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
const Subcont = styled.div`
  width: 30%;
  box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  justify-items: center;
  display: flex;
  flex-direction: column;
`
const Tit = styled.h1`
  margin-bottom: 50px;
  font-size: 58px;
  text-align: center;
`

const Title = styled.h2`
  margin-top: 50px;
`

const Service = () => {
  return (
    <Ser>
      <Container>
        <Map>
          <Tit>Our Services</Tit>
          <Cont>
            <Subcont>
              <House style={{ fontSize: '56px' }} />
              <Title>ROOMS & HALLS</Title>
            </Subcont>
            <Subcont>
              <Eng style={{ fontSize: '56px' }} />
              <Title>ACCURATE ENGINEERING</Title>
            </Subcont>
            <Subcont>
              <Apart style={{ fontSize: '56px' }} />
              <Title>GENERAL BUILDER</Title>
            </Subcont>
            <Subcont>
              <Tung style={{ fontSize: '56px' }} />
              <Title>ELECTRICITY</Title>
            </Subcont>
            <Subcont>
              <Fire style={{ fontSize: '56px' }} />
              <Title>TRUCK SERVICES</Title>
            </Subcont>
            <Subcont>
              <House style={{ fontSize: '56px' }} />
              <Title>GENERAL BUILDER</Title>
            </Subcont>
            <Subcont>
              <Hand style={{ fontSize: '56px' }} />
              <Title>REFURBISHMENT</Title>
            </Subcont>
            <Subcont>
              <Car style={{ fontSize: '56px' }} />
              <Title>FAST DELIVERY</Title>
            </Subcont>
            <Subcont>
              <Eng style={{ fontSize: '56px' }} />
              <Title>PROFESSIONAL OPINION</Title>
            </Subcont>
          </Cont>
        </Map>
      </Container>
    </Ser>
  )
}

export default Service
