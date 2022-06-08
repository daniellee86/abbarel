import styled from "styled-components"
import { categoryItems } from "./categorydata"
import { useState } from "react"
import { Category } from "@material-ui/icons"

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
padding: 30px;
`
const Top = styled.div`
height: 30%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Title = styled.h2`
margin-bottom: 10px;
`
const PreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75%;
  width: 100%;
`
const PreviewItem = styled.div`
  position: relative;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const PreviewImage = styled.img`
  height: 100%;
  width: 100%;
`
const TopLayer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.231);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: solid 0.5px black;
`
const PreviewTitle = styled.h3`
font-weight: 400;
letter-spacing: 5px;
`
const Bottom = styled.div`
height: 70%;
width: 100%;
padding-top: 30px;
`
const CategoryWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
`
const Left = styled.img`
flex: 1;
object-fit: cover;
`
const Right = styled.div`
flex: 1;
padding: 30px;
`
const CategoryTitle = styled.h1`
   font-family: 'EB Garamond', serif;
   margin-bottom: 30px;
`
const CategoryDesc = styled.p`
font-size: 18px;
`



const Categories = () => {
 const [activeCategory, SetActiveCategory] = useState(categoryItems[0])
 const [clicked, SetClicked] = useState(0)

 const handleActiveCategory = (i) => {
  SetActiveCategory(categoryItems[i])
  SetClicked(i)
 }


  return (
    <Container>

      <Top>
      <Title>Categories</Title>

<PreviewWrapper>
  {categoryItems.map((item, i) => {
    return <PreviewItem onClick={() => handleActiveCategory(i)} key={i}>
           <PreviewImage src={item.img} alt="preview image"/>
           {i !== clicked && 
           <TopLayer>
            <PreviewTitle>{item.title}</PreviewTitle>
           </TopLayer>
           }
           </PreviewItem>
  })}
</PreviewWrapper>
      </Top>


        <Bottom>
        <CategoryWrapper>
          <Left src={activeCategory?.img}/>
          <Right>
            <CategoryTitle>{activeCategory?.title}</CategoryTitle>
            <CategoryDesc>{activeCategory?.desc}</CategoryDesc>
          </Right>
        </CategoryWrapper>

        </Bottom>

    </Container>
  )
}

export default Categories

