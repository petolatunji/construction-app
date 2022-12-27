import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, FreeMode, Thumbs } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import { imageData } from '../pages/topData'

const Cont = styled.div``
const Wrapper = styled.div``
const Tip = styled.div`
  display: flex;
  position: relative;
`

const Total = styled.div``
const Div = styled.div`
  position: relative;
  text-align: center;
  color: black;
  margin-bottom: 50px;
`
const Image = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`
const Text = styled.div`
  position: absolute;
  top: 8px;
  left: 16px;
  margin-top: 200px;
  padding-left: 100px;
`
const Tex = styled.h1`
  font-size: 70px;
  width: 700px;
`

const Btn = styled.button`
  background-color: black;
  cursor: pointer;
  padding: 20px;
  color: white;
  border: none;
  font-size: 24px;
  font-weight: 500;
`

const TopHome = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <Cont>
      <Wrapper>
        <Tip>
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={'true'}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            style={{
              '--swiper-navigation-color': '#ffd700',
              '--swiper-pagination-color': '#ffd700',
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay, FreeMode, Thumbs]}
          >
            {imageData.map((item) => {
              return (
                <SwiperSlide>
                  <Total>
                    <Div>
                      <Image src={item.icon} />
                    </Div>
                    <Text>
                      <Tex>{item.desc}</Tex>
                      <Link
                        to='/about'
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <Btn>{item.btn}</Btn>
                      </Link>
                    </Text>
                  </Total>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Tip>
      </Wrapper>
    </Cont>
  )
}

export default TopHome
