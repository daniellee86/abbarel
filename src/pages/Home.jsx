import styled from 'styled-components'
import Hero from '../components/hero/Hero'
import Categories from '../components/categories/Categories'


const Container = styled.div`
`

const Home = () => {
  return (
    <Container>
    <Hero/>
    <Categories/>
    </Container>
  )
}

export default Home