import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { imageDat } from '../pages/imageD'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 30px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Tip = styled.div`
  display: flex;
  margin-bottom: 50px;
  gap: 50px;
`
const Left = styled.div`
  width: 40%;
  position: relative;
`
const Right = styled.div`
  width: 60%;
`
const Nu = styled.h1`
  margin: 0px;
  font-size: 100px;
  color: #ffd700;
`
const Exp = styled.h1`
  margin: 0px;
`
const Ex = styled.h1`
  font-size: 40px;
  font-weight: bold;
`
const Ep = styled.p`
  font-size: 20px;
`
const Button = styled.button`
  margin-top: 30px;
  background-color: #ffd700;
  color: white;
  padding: 10px 15px;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`
const Image = styled.img`
  object-fit: cover;
  margin-left: 50px;
  margin-top: 50px;
  position: relative;
  bottom: 20px;
  height: 50vh;
  width: 25vw;
`
const Shape = styled.div`
  clip-path: polygon(0% 0%, 33% 0, 33% 100%, 0 100%);
  background-color: #ffd700;
  width: 60%;
  height: 52%;
  position: absolute;
  z-index: 0;
  bottom: 100;
`
const Total = styled.div``
const Div = styled.div`
  margin-bottom: 20px;
`

const Experience = () => {
  return (
    <Cont>
      <Wrapper>
        <Tip>
          <Shape />
          <Left>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={'true'}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#ffd700',
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
            >
              {imageDat.map((item) => {
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
          </Left>
          <Right>
            <Nu>11</Nu>
            <Exp>YEARS OF EXPERIENCE</Exp>
            <Ex>
              Improving quality of life with an integrated unified approach.
            </Ex>
            <Ep>
              Our team will handle all aspect including bid/award of contracts,
              management of contracts, RFI and submittal trafficking, payment
              applications, and close out.
            </Ep>

            <Button>
              <Link
                to='/contact'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: 'inherit',
                }}
              >
                GET IN TOUCH
              </Link>
            </Button>
          </Right>
        </Tip>
      </Wrapper>
    </Cont>
  )
}

export default Experience
