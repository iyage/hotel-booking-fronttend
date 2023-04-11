import { useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import styled from "styled-components"
import { SearchBtn } from "./List"

  const Container = styled.div`
      width: 79%;
    margin: auto;
    margin-top: 30px;
  `
const HighLights = styled.div`
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex:2;
`
const Right = styled.div`
flex: 1;
text-align: end;
vertical-align: top;
`
const HighLightHeader = styled.h1`
  
`
const HighLightSubHeader = styled.h1`
  color: green;
  font-size: 18px;
`
const Location = styled.div`
  display: flex;
  gap: 10px;
  margin:20px 0;
`
const LocationItem = styled.span`
  
`
const Address = styled.h5`
  color: gray;
`
const Gallery = styled.div`
margin: 20px 0px;
display: flex;
flex-wrap: wrap;
gap: 5px;
row-gap: 0;
`
const ImgageContainer = styled.div`
  flex:33%;
  cursor: pointer;
  flex-grow: 0;
`
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
`
const Description = styled.div`
  margin: 30px 0px 50px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
const DescriptionLeft = styled.div`
flex:70%;
flex-grow: 0;

`
const DescriptionHeader = styled.h2`
  letter-spacing: 1px;
`
const DescriptionRight = styled.div`
flex: 25%;
flex-grow: 0;
`
const ApartmentDescription=styled.p`
  text-align: justify;
`
const Prices = styled.div`
  background-color: aliceblue;
  border-radius: 2px;
  padding: 20px;
`
const PricesHeader = styled.h3`
  font-size: 18px;
  color: rgba(0,0,0,0.5);
  margin-bottom: 20px;
`
const ShortDescription = styled.p`
  font-size: 14px;
`
const Cost = styled.p`
  margin: 20px 10px;
`
const Val = styled.span`
  font-weight: 700;
  font-size: 20px;
`


function Hotel({handleToggleModal, galleryImage,setGalleryIndex}) {
  return (
    <Container>
      <HighLights>
       <Left>
        <HighLightHeader>
          Grand Hotel
        </HighLightHeader>
        <Location>
          <LocationItem><FaMapMarkerAlt/></LocationItem>
           <LocationItem><Address>Anifowose street Opebi Allen</Address></LocationItem>
        </Location>
        <HighLightSubHeader>Book a stay over N10,000 at this property and get a free airport taxi</HighLightSubHeader>
       </Left>
       <Right>
<SearchBtn style={{width:'50%',marginTop:'0'}}>Book Now!</SearchBtn>
       </Right>
      </HighLights>
      <Gallery>
        {galleryImage.map((img,index)=>{
          return (<ImgageContainer onClick={()=>{handleToggleModal();setGalleryIndex(index) }}>
          <Image src={img.url}/>
          </ImgageContainer>)
        })}
        </Gallery>
<Description>
<DescriptionLeft>
<DescriptionHeader>
  Lorem ipsum dolor sit amet

</DescriptionHeader>
  <ApartmentDescription>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut reprehenderit atque voluptate ex fugiat, sunt id. Dolore rerum veritatis aut quo tempore corporis veniam. Voluptatum magnam mollitia optio aut.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptas molestias accusamus esse laudantium fugit ratione autem modi sunt, distinctio asperiores iste ducimus voluptatum earum ut commodi repellat adipisci natus.
  </ApartmentDescription>
</DescriptionLeft>
<DescriptionRight>
<Prices>
<PricesHeader>
  Lorem ipsum dolor sit amet.
</PricesHeader>
<ShortDescription>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus nam sit saepe nisi ab cupiditate hic odit repellat laudantium.
</ShortDescription>
<Cost><Val>N50,000</Val> (9 Nights)</Cost>
<SearchBtn>Reserve or book now!</SearchBtn>
</Prices>
</DescriptionRight>
  </Description>
    </Container>
  )
}

export default Hotel