import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { swiperData } from '../pages/swiperData'
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 100px;
  margin-bottom: 50px;
  flex-direction: column;
`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`
const Tot = styled.div`
  background-color: #d9dddc;
  padding: 20px;
  margin: 0 40px;
`

const Total = styled.div`
  width: 400px;
  border-radius: 32px;
  background-color: white;
  margin-bottom: 50px;
  margin-top: 50px;
`
const Card = styled.div`
  border-radius: 25px;
  background-color: #ffd700;
`
const ImageCon = styled.div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
`
const Span = styled.span``
const Div = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  padding: 3px;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white;
`
const CardCon = styled.div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Ht = styled.h1`
  font-size: 32px;
  font-weight: 500;
`
const Hp = styled.p`
  font-size: 20px;
  text-align: center;
`
const Btn = styled.button`
  border: none;
  color: white;
  background-color: #ffd700;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.5s ease;
  font-weight: bold;
  margin-bottom: 20px;
  &:hover {
    background-color: white;
    color: black;
  }
`

const Htt = styled.h1`
  margin-bottom: 0;
  text-align: center;
`

const AllProject = () => {
  return (
    <Con>
      <ContactWrapper>
        <Tot>
          <Htt>Project Grid</Htt>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            style={{
              '--swiper-pagination-color': '#ffd700',
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            {swiperData.map((item) => {
              return (
                <SwiperSlide>
                  <Total>
                    <Card>
                      <ImageCon>
                        <Span></Span>
                        <Div>
                          <Image src={item.icon} />
                        </Div>
                      </ImageCon>
                    </Card>
                    <CardCon>
                      <Ht>{item.title}</Ht>
                      <Hp>{item.desc}</Hp>

                      <Link
                        to='/project-details'
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          fontSize: '20px',
                        }}
                      >
                        <Btn>{item.btn}</Btn>
                      </Link>
                    </CardCon>
                  </Total>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Tot>
      </ContactWrapper>
    </Con>
  )
}

export default AllProject
