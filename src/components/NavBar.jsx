import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #003580;
`
const Wrapper = styled.div`
    width: min(87%,87.4vw);
    margin: auto;
    padding: 15px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.span`
    font-weight: 700;
`
const Items = styled.div`
    display: flex;
    gap: 10px;
`
const RegButton = styled.button`
    padding: 5px 10px;
    border: none;
    background-color: white;
    cursor: pointer;
    color: #003580;
`
const LogINButton = styled.button`
    padding: 5px 10px;
    border: none;
    background-color: white;
       cursor: pointer;
       color:#003580;
`


function NavBar() {
  return (
    <Container>
        <Wrapper>
       <Logo>
        BookNow
       </Logo>
       <Items>
        <RegButton>Register</RegButton>
        <LogINButton>Login</LogINButton>
       </Items>
        </Wrapper>
       </Container>
  )
}

export default NavBar