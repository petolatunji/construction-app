import styled from 'styled-components'
import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Pagination, Navigation, FreeMode, Thumbs } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import { Link } from 'react-router-dom'
import { imageData } from '../pages/imageD'

const Ser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  margin-top: 50px;
  margin-bottom: 0px;
  height: 100vh;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin-top: 50px;
  margin-bottom: 0px;
`
const Tot = styled.div``
const Tip = styled.div`
  display: flex;
  position: relative;
  gap: 40px;
`
const Htt = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 40px;
`
const Total = styled.div``
const Div = styled.div`
  margin-bottom: 40px;
`
const Image = styled.img`
  object-fit: cover;
  width: 900px;
`
const Tpp = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  width: 500px;
  height: 500px;
  position: absolute;
  z-index: 1;
  right: 100px;
  top: 100px;
`
const Ht = styled.h2`
  font-size: 40px;
  margin: 0;
`
const Hp = styled.p`
  font-size: 20px;
  font-weight: 600;
`
const Hpp = styled.p`
  margin-top: 50px;
  font-size: 20px;
`

const Company = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <Ser>
      <Container>
        <Tot>
          <Htt>ABOUT COMPANY</Htt>
          <Tip>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={'true'}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
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
                    </Total>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <Tpp>
              <Ht>Small yet passionate group of developers</Ht>
              <Hp>
                Our team of seasoned construction professionals has a combined
                technical expertise and knowledge across a wide range of
                property types
              </Hp>
              <Hpp>
                our award-winning team makes challenging projects look
                effortless, from historic preservation to cutting-edge
                contemporary designs. Adept in modern technologies and
                sophisticated modeling systems, we’ve mastered complexities that
                are beyond the scope of other builders – all while providing
                unparalleled craftsmanship and customer service.
              </Hpp>
            </Tpp>
          </Tip>
        </Tot>
      </Container>
    </Ser>
  )
}

export default Company
