import styled from 'styled-components'
import NavBar from './NavBar'
import { useState } from 'react'
import { sliderItems } from '../data'
//
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
    height: 100vh;
    position: relative;
`

const SliderContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
overflow: hidden;
`
const ButtonWrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: 20px;
  width: 10%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: transparent;
border: solid 1px black;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
z-index: 2;
`
const Pagination = styled.div`
    position: absolute;
    z-index: 1;
    right: 40px;
    top: 75px;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
padding: 55px 30px 0 30px;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`

const InfoContainer = styled.div`
height: 100%;
width: 30%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
color: #FAF9F6;
`
const Title = styled.h1`
font-size: 75px;
 font-family: 'EB Garamond', serif;
`
const Desc = styled.p`
font-size: 25px;
letter-spacing: 3px;
margin: 30px 0px;
`
const Button = styled.button`
padding: 10px;
font-size: 15px;
font-weight: 200;
background-color: transparent;
color: black;
border: 1px solid black;
border-radius: 30px;
cursor: pointer;
`
const ImgContainer = styled.div`
height: 90%;
width: 45%;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
transform-style: preserve-3d;
background-image:
/* linear-gradient(black, black),  */
${props=>props.image};
background-size: cover;
/* background-blend-mode: saturation; */
/* border: solid 0.5px black; */
border-radius: 30px;
box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

const Product = styled.div`
position: relative;
flex: 1;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Circle = styled.div`
height: 80%;
width: 40%;
background: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgb(171, 171, 171)
  );
border-radius: 50%;
`
const ProductImage = styled.img`
height: 95%;
width: 50%;
position: absolute;
z-index: 2;
transition: all 0.75s ease-out;
`
const Info = styled.div`
flex: 1;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
color: #FAF9F6;
padding: 0px 30px;
`
const Titles = styled.div``

const CardTitle = styled.h2`
font-weight: bold;
font-size: 25px;
transition: all 0.75s ease-out;
`
const CardDesc = styled.p`
font-size: 20px;
transition: all 0.75s ease-out;
`

const Sizes = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`

const Size = styled.button`
 padding: 0.5rem 2rem;
 background: #FAF9F6;
  border: solid 0.5px black;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  cursor: pointer;
  color: black;
  transition: all 0.75s ease-out;
`

const Purchases = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const Purchase = styled.button` 
  padding: 0.5rem 2rem;
  background: #FAF9F6;
  border: solid 0.5px black;
  color: black;
  cursor: pointer;
  border-radius: 30px;
  align-self: center;
  transition: all 0.75s ease-out;
`


const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction)=> {

        if (direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
            
        } else {

            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
        }
    }


  return (
    <Container>
        <NavBar/>

        <SliderContainer>
        <Pagination>{slideIndex + 1} / 3</Pagination>    


       <ButtonWrapper>
       <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowLeftOutlined/>
       </Arrow>
       <Arrow direction="right" onClick={()=>handleClick("right")}>
           <ArrowRightOutlined/>
       </Arrow>
        </ButtonWrapper>     
   

        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map(item => (
            <Slide bg={item.bg} key={item.id}>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>

            <ImgContainer image={`url("${sliderItems[slideIndex].img}")`}>
                <Product>
                    <Circle></Circle>
                    <ProductImage src={item.product}></ProductImage>
                </Product>
                <Info>
                    <Titles>
                    <CardTitle>{item.producttitle}</CardTitle>
                    <CardDesc>{item.productdesc}</CardDesc>
                    </Titles>
                  
                    <Sizes>
                        <Size>38</Size>
                        <Size>40</Size>
                        <Size>42</Size>
                        <Size>44</Size>
                    </Sizes>
                    <Purchases>
                        <Purchase>BUY NOW</Purchase>
                    </Purchases>
                </Info>
           
            
            </ImgContainer>
            </Slide>
            ))}
 
        </Wrapper>

    
   </SliderContainer>

    </Container>
  )
}

export default Hero