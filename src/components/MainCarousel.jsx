import React, { useRef } from 'react'
import { Carousel } from 'antd'
import { StaticImage } from 'gatsby-plugin-image'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const MainDiv = styled.div`
  position: relative;
`;

const LeftButton = styled.div`
  border-radius: 0 15px 15px 0;
  width: 120px;
  height: -webkit-fill-available;
  position: absolute;
  top: 0;
  display: flex; 
  justify-content: center;
  align-items: center;
  opacity: 60%;
  transition: all 0.3s ease-in;

  :hover{
    background-color: #fe565671;
    opacity: 100%;
    border-color: black;
    border: 5px;
  }

  @media (max-width: 784px) {
    display: none;
  }
`;

const RightButton = styled.div`
  border-radius: 15px 0 0 15px;
  width: 120px;
  height: -webkit-fill-available;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 60%;
  transition: all 0.3s ease-in;

  :hover{
    background-color: #fe565671;
    opacity: 100%;
    border-color: black;
    border: 5px;
  }

  @media (max-width: 784px) {
    display: none;
  }
`;


const MainCarousel = () => {

    //ref for carousel method calls
    const refCarousel = useRef()

    const carouselNext = () => refCarousel.current.next();
    const carouselPrev = () => refCarousel.current.prev();

    //image resolution is 1920x650

    return (
        <MainDiv>
          <Carousel autoplay="true" dots={false} ref={refCarousel}>
            <div>
              <StaticImage alt="" src="../images/banner.png" />
            </div>
            <div>
              <StaticImage alt="" src="../images/banner.png" />
            </div>
            <div>
              <StaticImage alt="" src="../images/banner.png" />
            </div>
          </Carousel>
          <LeftButton 
            aria-label="Previous image" 
            onClick={() => carouselPrev()}>
            <FontAwesomeIcon 
              icon={faArrowLeft}
              size="4x"/>
          </LeftButton>
          <RightButton 
            aria-label="Next image" 
            onClick={() => carouselNext()}>
            <FontAwesomeIcon 
              icon={faArrowRight}
              size="4x"/>
          </RightButton>
        </MainDiv>
    )
}

export default MainCarousel
