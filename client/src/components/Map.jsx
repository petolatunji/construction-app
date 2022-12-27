import React from 'react'
import styled from 'styled-components'
import { mobile } from '../response'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState, useContext } from 'react'

const MapCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;

  ${mobile({})}
`
const MapWrapper = styled.div`
  display: flex;

  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
`

const Map = () => {
  return (
    <MapCont>
      <MapWrapper>
        <iframe
          class='gmap_iframe'
          width='100%'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          height='500px'
          src='https://maps.google.com/maps?width=1400&amp;height=1400&amp;hl=en&amp;q=ibrahim taiwo road ilorin&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </MapWrapper>
    </MapCont>
  )
}

export default Map
