import React from 'react'
import styled from 'styled-components'

const NameContainer = styled.div`
    display: flex;
    margin-left:100px;
    margin-top: 10px;
    margin-bottom: 30px;
    
`
const LogoImage = styled.img`
    height: 40px;
    padding: 5px;
    
`
const LogoNameContainer= styled.div`
    color: gray;
    
`
const CompanyNameContainer = styled.div`
    font-size: 30px;
    
`
const CollegeNameContainer = styled.div`
    
`
const StyledButton = styled.button`
  padding: 18px;
  margin-left: 100px;
  margin-top: 5px ;
  border-radius: 10px;
  width: 240px;
  height: auto;
  border: 2px solid #4285F4; 
  background-color: white; 
  color: #4285F4;
  font-weight: bold;
  font-size: medium;

  &:hover {
    cursor: pointer;
    background-color: #4285F4; 
    color: white;
  }
    
`

export default function Logo() {
  return (
    <>
        <NameContainer>
            <LogoImage src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png"></LogoImage>
            <LogoNameContainer>
                <CompanyNameContainer>Google Developer Student Clubs</CompanyNameContainer>
                <CollegeNameContainer>National Institue of Technology, Rourkela</CollegeNameContainer>
            </LogoNameContainer>
        </NameContainer>
        <StyledButton>Share Your Feedback</StyledButton>
    </>
  )
}
