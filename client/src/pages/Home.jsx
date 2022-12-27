import React from 'react'
import Build from '../components/Build'
import Company from '../components/Company'
import Hcont from '../components/Hcont'
import Mission from '../components/Mission'
import Our from '../components/Our'
import Ourservices from '../components/Ourservices'
import TopHome from '../components/TopHome'
import styled from 'styled-components'

const Cont = styled.div`
  overflow: hidden;
`

const Home = () => {
  return (
    <Cont>
      <TopHome />
      <Build />
      <Company />
      <Mission />
      <Ourservices />
      <Hcont />
      <Our />
    </Cont>
  )
}

export default Home
