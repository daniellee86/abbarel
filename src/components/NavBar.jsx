import styled from 'styled-components'
import {
   Search, 
  PersonOutline, 
  FavoriteBorderOutlined, 
  ShoppingCartOutlined,
  MenuOutlined
} from '@material-ui/icons'


const Container = styled.div`
height: 55px;
width: 100%;
padding: 0 30px;
position: absolute;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
width: 100%;
border-bottom: solid 1px black;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = styled.div`
flex:0.5;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled.h1`
    font-family: 'EB Garamond', serif;
`

const Center = styled.div`
flex-grow: 2;
height: 100%;
`
const SearchContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Input = styled.input`
border: 0.5px solid black;
background-color: transparent;
padding: 5px 10px;
width: 50%;
border-radius: 20px;
`

const Right = styled.div`
flex:0.5;
display: flex;
align-items: center;
justify-content: space-between;
`

const Icon = styled.a`
  
`

const NavBar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>
            <MenuOutlined/>
            <Logo>abbarel.</Logo>
        </Left>
        <Center>
        <SearchContainer>
             <Input placeholder='Search items and brands'/>
             <Search style={{fontsize:16}}/>
          </SearchContainer>
        </Center>
        <Right>
          <PersonOutline style={{fontsize:16}}/>
          <FavoriteBorderOutlined style={{fontsize:16}}/>
          <ShoppingCartOutlined style={{fontsize:16}}/>
        </Right>

    </Wrapper>
    </Container>
  )
}

export default NavBar