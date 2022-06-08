import styled from 'styled-components'
import NavBar from '../NavBar'
import { useState } from 'react'
import { sliderItems } from './slidedata'
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
background-color: #FAF9F6;
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
background-image: ${props=>props.image};
background-size: cover;
`

const InfoContainer = styled.div`
height: 100%;
width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
color: black;
`
const Title = styled.h1`
font-size: 60px;
 font-family: 'EB Garamond', serif;
 font-weight: 600;
`
const Desc = styled.p`
font-size: 30px;
letter-spacing: 3px;
margin: 30px 0px;
`
const Button = styled.button`
padding: 10px;
font-size: 15px;
font-weight: 600;
background-color: transparent;
color: black;
border: 1px solid black;
border-radius: 30px;
cursor: pointer;
`
const ImgContainer = styled.div`
height: 90%;
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
background: rgba(255, 255, 255, 0.11);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
`

const Product = styled.div`
color: #FAF9F6;
position: relative;
flex: 2;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const Circle = styled.div`
height: 70%;
width: 50%;
background: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgb(157, 157, 157)
  );
border-radius: 50%;
`
const ProductImage = styled.img`
height: 70%;
width: 50%;
position: absolute;
z-index: 2;
top: 75px;
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


const CardTitle = styled.h2`
font-weight: bold;
font-size: 25px;
font-weight: 400;
margin-bottom: 20px;
text-decoration: underline;
text-underline-offset: 5px;
text-decoration-thickness: 1.5px;
`

const Sizes = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`

const Size = styled.button`
 padding: 0.5rem 2rem;
 background: transparent;
  border: solid 0.5px black;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  cursor: pointer;
  color: black;
  font-weight: 600;
`

const Purchases = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const Purchase = styled.button` 
  padding: 0.5rem 2rem;
  background: transparent;
  border: solid 0.5px black;
  color: black;
  cursor: pointer;
  border-radius: 30px;
  align-self: center;
  transition: all 0.75s ease-out;
  font-weight: 600;
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
            <Slide  
            image={`url("${sliderItems[slideIndex].img}")`}
            key={item.id}
            >
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>

            <ImgContainer >
                <Product>
                    <CardTitle>{item.producttitle}</CardTitle>
                    <Circle></Circle>
                    <ProductImage src={item.product}></ProductImage>
                </Product>
                <Info>
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