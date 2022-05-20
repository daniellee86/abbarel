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
  width: 15%;
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
align-items: flex-start;
background-color: #${props=>props.bg};
`

const InfoContainer = styled.div`
height: 100%;
width: 30%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
color: white;
`
const Title = styled.h1`
font-size: 75px;
 font-family: 'EB Garamond', serif;
`
const Desc = styled.p`
margin: 40px 0;
font-size: 25px;
letter-spacing: 3px;

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
height: 100%;
width: 50%;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
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
            <ImgContainer>
             <Image src={item.img}/>
            </ImgContainer>
            </Slide>
            ))}

        </Wrapper>

    
   </SliderContainer>

    </Container>
  )
}

export default Hero