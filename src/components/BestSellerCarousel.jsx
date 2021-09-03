import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import { Card } from 'antd';

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;

    .container{
        background-color: #80808049;
        width: 1000px;
        border-radius: 40px;
    }

    .item{
        display: flex;
        justify-content: center;
        margin: 0;
    }
`;

const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1000
      },
      items: 3,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1000,
        min: 464
      },
      items: 2,
    }
  };

const BestSellerCarousel = () => {

    const {Meta} = Card;
    
    return (
        <CarouselContainer>
            <Carousel 
            responsive={responsive} 
            slidesToSlide={1}
            draggable={false}
            containerClass={"container"}
            itemClass={"item"}>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: "15px" }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{borderRadius: "15px 15px 0 0"}}/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Carousel>
        </CarouselContainer>
    )
}

export default BestSellerCarousel

