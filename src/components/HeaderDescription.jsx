import React, { useState } from 'react'
import styled from 'styled-components'
import {FaBed,FaCalendarAlt,  FaChild,} from "react-icons/fa";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { useNavigate} from 'react-router-dom';
const Container = styled.div`
    background-color: #003580;
`
const Wrapper = styled.div`
    width: min(87%,87.4vw);
    margin: auto;
    padding: 0px 0px 100px 0px;
    color: white;
    font-size: 18px;
    position: relative;
`
const HeaderTitle = styled.h2`
    font-size: 40px;
    letter-spacing: 1px;
    padding: 40px 0 10px  0;
`
const HeaderDescriptionContainer = styled.p`
    letter-spacing: 2px;
`
const HeaderSearch = styled.div`
color: gray;
background-color: white;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 7px;
border: 3px solid gold;
    position: absolute;
    top: 195px;
    left:65px;
    width: min(90%,90.4vw);
    margin: auto;
    padding: 20px 0;
`
const  SearchText = styled.span`
display: flex;
align-items: center;
gap: 10px;
    
`
const SearchInput = styled.input`
outline: none;
border: none;
font-size: 18px;
`
const CalenderSearch = styled.span`
    display: flex;
align-items: center;
gap: 10px;
    position: relative;
    cursor: pointer;
`

const DateRangeContainer = styled.span`
font-size: 14px;
tab-size: 4;
`
const UserOptions = styled.span`
   display: flex;
align-items: center;
gap: 10px; 
position: relative;
cursor: pointer;
`
const OptionSelected = styled.span`
    
`
const SearchButton = styled.button`
    border:  none;
    background-color: #1212b7;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;
`
const SelectOptions = styled.span`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid rgb(18, 18, 183,0.2) ;
    position: absolute;
    top:37px;
    width: 100%;
    box-shadow: 0px 0px 5px 0px rgba(18, 18, 183,0.2);
    background-color: white;
    z-index: 2;
`
const SelectOptionsItem = styled.span`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
`
const IncreamentBtn = styled.button`
    height: 20px;
    width: 20px;
    background-color: white;
    border: 1px solid #1212b7  ;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    color: #1212b7;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active{
        transform: scale(0.92);
    }
    &:disabled{
        cursor: not-allowed;
    }
`
const OptVal = styled.span`
    font-size: 12px;
`
const OptionsSelector = styled.span`
    display: flex;
    gap: 10px;
    align-items: center;
`




function HeaderDescription() {
        const [initialDate, setInitialDate,] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openDateRange,setOpenDateRange] = useState(false)
   const [destination,setDestination] = useState("")
   const [openOpt,setOpenOPt] = useState(false)
   const [optVal,setOptVal] = useState({
    adult:1,
    children:0,
    rooms:1
   })
   function handleOptVal(opt,op)
   {
    console.log(opt)
    setOptVal((prev)=>
    {
     return{   ...prev,[opt]: op==='i'?prev[opt]+1:prev[opt]-1
    }
});
   }
   const navigate =  useNavigate();
   const handleNavigate = ()=>{
     navigate('/hotels',{state:{initialDate,optVal,destination}})
   }
  return (
    <Container>
        <Wrapper>
        <HeaderTitle>
    A lifetime of discounts? it's Genius.
</HeaderTitle>
<HeaderDescriptionContainer>
    Get rewarded for your travels-unlock instant savings of 20% or more with a free booknow account.
</HeaderDescriptionContainer>
<HeaderSearch>
    <SearchText>
        <FaBed/>
        <SearchInput onChange={(e)=>{setDestination(e.target.value)}} placeholder='Where are you going?'/>
    </SearchText>
    < CalenderSearch>
<FaCalendarAlt/>
<DateRangeContainer onClick={()=>setOpenDateRange(!openDateRange)}>{format(initialDate[0].startDate,'MM/dd/yyyy')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    to  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {format(initialDate[0].endDate,'MM/dd/yyyy')}
</DateRangeContainer>
<span style={{position:'absolute',top:'30px',border:'1px solid #003580',zIndex:'2'}}>
        {openDateRange&&<DateRange
  editableDateInputs={true}
  onChange={item => setInitialDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={initialDate}
  minDate={new Date()}

/>}
</span>
</CalenderSearch>
<UserOptions >
< OptionSelected onClick={()=>setOpenOPt(!openOpt)}><FaChild/> adult {optVal.adult}. children {optVal.children} . rooms {optVal.rooms}.</OptionSelected>
{openOpt&&< SelectOptions>
<SelectOptionsItem><span color='#1212b7'>Adult</span> <OptionsSelector><IncreamentBtn disabled={optVal.adult<=1} onClick={()=>handleOptVal('adult','d')}>-</IncreamentBtn><OptVal>{optVal.adult}</OptVal> <IncreamentBtn  onClick={()=>handleOptVal('adult','i')}>+</IncreamentBtn></OptionsSelector> </SelectOptionsItem>
<SelectOptionsItem><span>Children</span> <OptionsSelector><IncreamentBtn disabled={optVal.children<=0}onClick={()=>handleOptVal('children','d')}>-</IncreamentBtn><OptVal>{optVal.children}</OptVal> <IncreamentBtn  onClick={()=>handleOptVal('children','i')}>+</IncreamentBtn></OptionsSelector> </SelectOptionsItem>
<SelectOptionsItem> <span>Rooms</span>  <OptionsSelector> <IncreamentBtn disabled={optVal.rooms<=1} onClick={()=>handleOptVal('rooms','d')}>-</IncreamentBtn><OptVal>{optVal.rooms}</OptVal><IncreamentBtn onClick={()=>handleOptVal('rooms','i')}>+</IncreamentBtn></OptionsSelector></SelectOptionsItem>
</SelectOptions>}
</UserOptions>
<SearchButton onClick={handleNavigate}>Search</SearchButton>
</HeaderSearch>
        </Wrapper>
        </Container>
  )
}

export default HeaderDescription