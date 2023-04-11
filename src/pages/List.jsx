import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RatingBadge } from './Home';
const Container = styled.div`
  width:100%;
  margin: 30px 0;
`
const Wrapper = styled.div`
   width: min(87%,87.4vw);
   margin: auto;
   display: flex;
   gap:20px;
`
const SideBar = styled.div`
  flex:25%;
  
`
const Main = styled.div`
flex: 75%;
`
const SideBarCard = styled.div`
  background-color: orange;
  height:500px;
  border-radius: 7px;
  box-shadow: 0px 0px 5px 0px  orange;
  padding: 20px 10px;
    position:sticky;
`
const SideBarHeader = styled.h1`
font-size: 24px;
color:#003580;
`
const Formcontrol = styled.div`
  margin: 10px 0px;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 18px;
  padding: 0 10px;
  border: 1px solid #003580;
    border-radius: 5px;
    color: #928888;
`
const OptInput = styled.input`
  height: 30px;
  outline: none;
  font-size: 18px;
  padding: 0 10px;
  border: 1px solid #003580;
  width: 70px;
  border-radius: 5px;
`
const OptInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Label = styled.label`
  font-size: 14px;
  margin: 5px 0;
  color: rgba(0, 53, 128,0.6);
  font-weight: 700;
`
export const SearchBtn = styled.button`
  width: 100%;
  padding: 10px 0;
  font-weight: 700;
  color: white;
  margin: 20px 0;
  background-color: #3172cc ;
  border: none;
  cursor: pointer;
  transition: all 0.8s ease;
  &:active{
    transform: scale(0.92);
  }
    border-radius: 5px;
`
const MainCard = styled.div`
  height: 240px;
  padding: 10px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
  border-radius: 7px;
  margin-bottom: 20px;
`
const MainCardWrapper = styled.div`
  display: flex;
  gap:10px;
`

const ListImageContainer = styled.div`
    height:210px;
    width:200px;
`
const ListImage = styled.img`
width: 100%;
height: 100%;
  object-fit: fill;
`
const  ListDescription = styled.div`
flex: 40%;
`
const  ListDescriptionHeader = styled.h2`
  color:  skyblue;
  margin-bottom: 10px;
`
const Distance = styled.p`
  font-size: 12px;
  color: gray;
    margin: 20px 0px;
`
const Badge = styled.span`
  background-color: darkgreen;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
`
const ListType = styled.h4`
  margin: 15px 0;
  font-size: 14px;
  color: rgba(0,0,0,0.7);
`
const Measurement = styled.span`
  font-size: 12px;
   color: rgba(0,0,0,0.4);
   font-weight: 600;
   margin-bottom: 5px;
`
const Right = styled.div`
  flex:10%;
`
const Ratings = styled.div`
  display: flex;
  margin-bottom: 110px;
  justify-content: space-between;
  align-items: center;
`
const Price = styled.p`
  color: rgba(0,0,0,0.7);
  font-size: 18px;

`
function List() {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination)
  const [dateRange,setDateRange] = useState(location.state.initialDate)
    const [optionCount,setOptionCount] = useState(location.state.optVal)
     const [openDateRange,setOpenDateRange] = useState(false)
  return (
    <Container>
      <Wrapper>
            <SideBar>
              < SideBarCard>
              <SideBarHeader>
                Search
              </SideBarHeader>
              <form action="">
                    <Formcontrol>
                      <Label htmlFor="">Destination</Label>
                      <Input placeholder='Destination' defaultValue={destination} />
                    </Formcontrol>
                       <Formcontrol>
                      <Label htmlFor="">Chek-in  Date</Label>
                      <Input style={{cursor:'pointer'}} defaultValue={` ${format(dateRange[0].startDate,'MM/dd/yyyy')}   to   ${format(dateRange[0].endDate,'MM/dd/yyyy')}`}/>
                      {openDateRange&& <DateRange/>}
                     
                    </Formcontrol>
                        <Formcontrol>
                          <Label htmlFor="">Options</Label>
                    </Formcontrol>
                       <Formcontrol>
                        <OptInputWrapper>
                          <Label htmlFor="">Min price (per night)</Label>
                          <OptInput/>
                        </OptInputWrapper>
                    </Formcontrol>
                                           <Formcontrol>
                        <OptInputWrapper>
                          <Label htmlFor="">Max price (per night)</Label>
                          <OptInput/>
                        </OptInputWrapper>
                    </Formcontrol>
                                           <Formcontrol>
                        <OptInputWrapper>
                          <Label htmlFor="">Adult</Label>
                          <OptInput defaultValue={optionCount.adult}/>
                        </OptInputWrapper>
                    </Formcontrol>
                                           <Formcontrol>
                        <OptInputWrapper>
                          <Label htmlFor="">Children</Label>
                          <OptInput defaultValue={optionCount.children}/>
                        </OptInputWrapper>
                        
                    </Formcontrol>
                                          <Formcontrol>
                        <OptInputWrapper>
                          <Label htmlFor="">Room</Label>
                          <OptInput defaultValue={optionCount.rooms}/>
                        </OptInputWrapper>
                        
                    </Formcontrol>
                 <SearchBtn>Search</SearchBtn>

                    
              </form>
              </SideBarCard>
            </SideBar>
            <Main>

          <MainCard>
            <MainCardWrapper>
              <ListImageContainer>
                 <ListImage src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
              </ListImageContainer>
             <ListDescription>
 <ListDescriptionHeader>
  Tower Street Apartment
 </ListDescriptionHeader>
 <Distance>500m from Lekki Deep Sea Port </Distance>
  <Badge>Free Airport taxi</Badge>
  <ListType>Studio Apartment with aircondioning</ListType>
  <Measurement>Entire Studion . 1 bedroom . 21m<sup>2</sup> 1 full bed</Measurement>
  <h4 style={{color:'green',marginBottom:'5px'}}>Free cancelation</h4>
   <h4 style={{color:'rgba(0,225,0,0.5)',fontSize:'12px'}}>You can can cancel later, so lock in this great price today!</h4>
             </ListDescription>
             <Right >
              <Ratings>
                <span style={{flex:'80%'}}>Excellent</span>
                <RatingBadge style={{padding:'10px'}}>9</RatingBadge>
              </Ratings>
              <Price><span style={{textDecoration:'line-through'}}>N</span>200,000</Price>
              <h6 style={{color:'rgba(0,0,0,0.3)'}}>Vat included</h6>
              <SearchBtn style={{margin:'2px'}}>See Availability</SearchBtn>
             </Right>
            </MainCardWrapper>

          </MainCard>
         
          <MainCard>
            <MainCardWrapper>
              <ListImageContainer>
                 <ListImage src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
              </ListImageContainer>
             <ListDescription>
 <ListDescriptionHeader>
  Tower Street Apartment
 </ListDescriptionHeader>
 <Distance>500m from Lekki Deep Sea Port </Distance>
  <Badge>Free Airport taxi</Badge>
  <ListType>Studio Apartment with aircondioning</ListType>
  <Measurement>Entire Studion . 1 bedroom . 21m<sup>2</sup> 1 full bed</Measurement>
  <h4 style={{color:'green',marginBottom:'5px'}}>Free cancelation</h4>
   <h4 style={{color:'rgba(0,225,0,0.5)',fontSize:'12px'}}>You can can cancel later, so lock in this great price today!</h4>
             </ListDescription>
             <Right >
              <Ratings>
                <span style={{flex:'80%'}}>Excellent</span>
                <RatingBadge style={{padding:'10px'}}>9</RatingBadge>
              </Ratings>
              <Price><span style={{textDecoration:'line-through'}}>N</span>200,000</Price>
              <h6 style={{color:'rgba(0,0,0,0.3)'}}>Vat included</h6>
              <SearchBtn style={{margin:'2px'}}>See Availability</SearchBtn>
             </Right>
            </MainCardWrapper>

          </MainCard>
            </Main>
      </Wrapper>
      </Container>
  )
}

export default List