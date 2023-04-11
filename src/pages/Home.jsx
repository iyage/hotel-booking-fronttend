import React from 'react'
import styled from 'styled-components'
import HeaderDescription from '../components/HeaderDescription'
const Container = styled.div`
   width: 79%;
    margin: auto;
    margin-top: 50px;
     z-index: 1;
`
const Featured = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
 
`
const FeaturedItem = styled.div`
  width:33.33%;
position: relative;
`
const Image = styled.img`
  object-fit: cover;
  height: 250px;
  width: 100%;
   border-radius: 10px;
`
const FaturedTitle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: black;
`
const Properties = styled.div`
  display: flex;
  gap: 20px;
`
const PropertiesItem = styled.div`
  flex:20%;
` 
const PropertiesImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 120px;
  border-radius: 10px;
`
const Homes = styled.div`
    display: flex;
  gap: 10px;
`
const HomesItem = styled.div`
  flex:25%;
` 
const HomesImage = styled.img`
  object-fit: contain;
  width: 100%;
`
const HomesTitle = styled.h5`
font-weight: 900;
margin: 5px 0;
  
`
const HomesCity = styled.h5`
font-weight: 500;
  color: gray;
`
const HomesPricing = styled.h5`
  font-weight: 700;
  margin: 5px 0;
`
const HomesRating = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const RatingBadge = styled.span`
background-color: #003580;
color: white;
padding: 3px;
font-size: 12px;
font-weight: 700;
box-shadow: 0px 0px 2px 0px #003580;
`
const Rating = styled.div`
  font-size: 12px;
`
const EmailList = styled.div`
  width:100%;
  background-color:#003580;
  height: 150px;
  margin-top:50px;
`
const Wrapper =styled.div `
  color: white;
  padding: 20px 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Hr = styled.hr`
  margin:20px 0;
  background-color:#5c93e6;
  width:100%;
  size:10;
  height:1px;
  border: none;
`
const MailContainer = styled.div`
margin-top: 10px;
display: flex;
gap: 5px;
justify-content: center;
`
const PropertyListing = styled.div`
background-color: #031e45 ;
padding: 20px 0;
`
const ListBtn = styled.span`
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 2px;
  color: white;
  font-size: 14px;
`
const ListingLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`
const ListingLink = styled.span`
  font-size: 12px;
  color: white;
`
function Home() {
  return (
    <>
      <HeaderDescription/>
<Container>
<Featured>
  <FeaturedItem>
    <Image src='https://images.unsplash.com/photo-1562842523-6d492ddc3e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'/>
     <FaturedTitle>
      <h1>Egypt</h1>
      <h3>123 Properties</h3>
      </FaturedTitle>
  </FeaturedItem>
    <FeaturedItem>
    <Image src='https://images.unsplash.com/photo-1630386226447-af0a955c1009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1648&q=80'/>
     <FaturedTitle>
      <h1>Ghana</h1>
      <h3>123 Properties</h3>
     </FaturedTitle>
  </FeaturedItem>
    <FeaturedItem>
    <Image src='https://images.unsplash.com/photo-1618828665347-d870c38c95c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'/>
    <FaturedTitle>
      <h1>Nigeria</h1>
      <h3>123 Properties</h3>
    </FaturedTitle>
  </FeaturedItem>
</Featured>
<h2 style={{  marginTop: '60px',marginBottom:'20px'}}>Browse by property type</h2>
<Properties>
  <PropertiesItem>
    <PropertiesImage src='https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
     <h3>Hotels</h3>
      <h5 style={{fontSize:'14px',color:'gray',fontWeight:'400'}}>123 Hotels</h5>
  </PropertiesItem>
  <PropertiesItem>
    <PropertiesImage src='https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80'/>
         <h3>Cabins</h3>
      <h5 style={{fontSize:'14px',color:'gray',fontWeight:'400'}}>123 Cabins</h5>
  </PropertiesItem>
    <PropertiesItem>
    <PropertiesImage src='https://images.unsplash.com/photo-1531300365552-da5abe58a725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80'/>
     <h3>Apartments</h3>
      <h5 style={{fontSize:'14px',color:'gray',fontWeight:'400'}}>123 apartments</h5>
  </PropertiesItem>
  <PropertiesItem>
    <PropertiesImage src='https://images.unsplash.com/photo-1627826676942-576ea238e0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80'/>
       <h3>Resorts</h3>
      <h5 style={{fontSize:'14px',color:'gray',fontWeight:'400'}}>123 resorts</h5>
  </PropertiesItem>
   <PropertiesItem>
    <PropertiesImage src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'/>
        <h3>Villa</h3>
      <h5 style={{fontSize:'14px',color:'gray',fontWeight:'400'}}>123 villas</h5>
  </PropertiesItem>
</Properties>
<h2 style={{  marginTop: '60px',marginBottom:'20px'}}>Home guest love</h2>
<Homes>
  <HomesItem>
< HomesImage src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
 <HomesTitle>Apartment La-royal</HomesTitle>
 < HomesCity>Lagos</HomesCity>
 <HomesPricing>From N50,000</HomesPricing>
 <HomesRating>< RatingBadge>7.5</RatingBadge> <Rating>Good</Rating> </HomesRating>
  </HomesItem>
    <HomesItem>
< HomesImage src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
 <HomesTitle>Apartment La-royal</HomesTitle>
 < HomesCity>Lagos</HomesCity>
 <HomesPricing>From N50,000</HomesPricing>
 <HomesRating>< RatingBadge>7.5</RatingBadge><Rating>Good</Rating>  </HomesRating>
  </HomesItem>
    <HomesItem>
< HomesImage src='https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
 <HomesTitle>Apartment La-royal</HomesTitle>
 < HomesCity>Lagos</HomesCity>
 <HomesPricing>From N50,000</HomesPricing>
 <HomesRating><RatingBadge RatingBadge>7.5</RatingBadge> <Rating>Good</Rating>  </HomesRating>
  </HomesItem>
    <HomesItem>
< HomesImage src='https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
 <HomesTitle>Apartment La-royal</HomesTitle>
 < HomesCity>Lagos</HomesCity>
 <HomesPricing>From N50,000</HomesPricing>
 <HomesRating><RatingBadge RatingBadge>7.5</RatingBadge> <Rating>Good</Rating> </HomesRating>
  </HomesItem>
</Homes>
</Container>
    <EmailList>
<Wrapper>
  <h3 style={{fontWeight:'500'}}>Save time,save money!</h3>
   <h5 style={{fontWeight:'300',fontSize:'16px',textAlign:'center'}}>Sign up and we 'll send the best deal </h5>
   <MailContainer>
    <input type={'text'} style={{width:'300px'}}/><button style={{padding:'10px 20px',backgroundColor:'#2d75da',color:'white',border:'none',fontWeight:'600'}}>Subscribe</button>
   </MailContainer>
</Wrapper>
</EmailList>
<PropertyListing>
  <div style={{textAlign:'center'}}> <ListBtn>
    List Property
  </ListBtn></div>
  <Hr/>
  <ListingLinks>
<ListingLink >Mobile version</ListingLink>
<ListingLink >Your account</ListingLink>
<ListingLink >Make changes online to your account</ListingLink>
<ListingLink >Customer service Help</ListingLink>
<ListingLink >Become an affiliate</ListingLink>
<ListingLink >Booknow.com</ListingLink>
  </ListingLinks>
</PropertyListing>
    </>

  )
}

export default Home