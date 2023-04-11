import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 500px;
    background-color: white;
`
const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 75%;
    margin: auto;
      margin-top: 20px;
`
const FooterItem  = styled.div`
    flex: 20%;
`
const Ul = styled.ul`
    list-style: none;
    color:#27a0e6d5;
    font-weight: 700;
    font-size: 14px;
`
const Li = styled.li`
    padding: 5px 5px;
`
function Footer() {
  return (
    <Container>
            <Wrapper>
                <FooterItem>
                    <Ul>
                        <Li>Countries</Li>
                        <Li>Region</Li>
                        <Li>Cities</Li>
                        <Li>Districts</Li>
                        <Li>Airports</Li>
                        <Li>Hotels</Li>
                         <Li>Places of interests</Li>
                    </Ul>
                </FooterItem>
                <FooterItem>
                    <Ul>
                        <Li>Hotels</Li>
                        <Li>Apartments</Li>
                        <Li>Resorts</Li>
                        <Li>Villas</Li>
                        <Li>resorts</Li>
                        <Li>Cabin</Li>
                         <Li>Guests Houses</Li>
                    </Ul>
                </FooterItem>
                <FooterItem>
                       <Ul>
                        <Li>Unique places to see</Li>
                        <Li>All desitination</Li>
                        <Li>Discover</Li>
                        <Li>Receives</Li>
                        <Li>Unpacked travel articles</Li>
                        <Li>Travel communities</Li>
                         <Li>Seasonal and holiday deals</Li>
                    </Ul>
                </FooterItem>
             
                  <FooterItem>
                       <Ul>
                        <Li>Hotels</Li>
                        <Li>Apartments</Li>
                        <Li>Resorts</Li>
                        <Li>Villas</Li>
                        <Li>resorts</Li>
                        <Li>Cabin</Li>
                         <Li>Guests Houses</Li>
                    </Ul>
                </FooterItem>
                   <FooterItem>
                       <Ul>
                        <Li>Coronavirus (COVID-19) FAQS</Li>
                        <Li>About Booknow.com</Li>
                        <Li>Customer service help</Li>
                        <Li>Partner help</Li>
                         <Li>Careers</Li>
                        <Li>Sustanability</Li>
                        <Li>Press Center</Li>
                        <Li>Safety Resource Center</Li>
                        <Li>Terms & Conditions</Li>
                        <Li>Dispute & Resolutions</Li>
                        <Li>Restaurant reservations</Li>
                        <Li>How we work</Li>
                        <Li>privacy & cookie statement</Li>
                        <Li>Manage cookies settings </Li>
                        <Li>Cooperate contact </Li>
                    </Ul>
                </FooterItem>
            </Wrapper>
             <div style={{color:'#0d50ad',fontWeight:'600',textAlign:'center'}}><span style={{cursor:'pointer'}}>External login</span></div>
            <div style={{letterSpacing:'5px',fontSize:'10px',fontWeight:'300'}}> Copyright@{(new Date()).getFullYear()}</div>
        </Container>
  )
}

export default Footer