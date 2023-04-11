import styled from 'styled-components'
import {FaBed, FaCar, FaPlane, FaTaxi} from "react-icons/fa";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Container = styled.div`
    background-color: #003580;
`
const Wrapper = styled.div`
    width: min(87%,87.4vw);
    margin: auto;
    padding: 20px 0 20px 0;
    color: white;
    font-size: 18px;
  
`
const Items = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const Item = styled.span`
    padding: 10px;
    display: flex;
   align-items: center;
   gap: 5px;
   cursor: pointer;
   &:hover{
      border: 1px  solid white;
  border-radius: 20px;
   }
`
function Header() {
  return (
    <Container>
        <Wrapper>
            <Items>
                <Item className='active-link'><FaBed/> Stays</Item>
                <Item><FaPlane/>Flights</Item>
                <Item><FaCar/>Car Rentals</Item>
                <Item><FaBed/> Attractions</Item>
                <Item><FaTaxi/>Airport taxi</Item>
            </Items>
        </Wrapper>
    </Container>
  
  )
}

export default Header