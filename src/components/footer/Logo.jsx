import React from "react";
import styled from "styled-components";

const NameContainer = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: 10px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //margin-left: 40%;
  }
`;
const LogoImage = styled.img`
  height: 40px;
  width: 82.19px;
  padding: 5px;
`;
const LogoNameContainer = styled.div`
  color: gray;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CompanyNameContainer = styled.div`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: medium;
    display: flex;
    justify-content: center;
  }
`;
const CollegeNameContainer = styled.div`
@media (max-width: 768px) {
  display: flex;
    justify-content: center;
    font-size: small;
  }
  
`;
const StyledButton = styled.button`
  padding: 18px;
  margin-left: 100px;
  margin-top: 5px;
  border-radius: 10px;
  width: 240px;
  height: auto;
  border: 2px solid #4285f4;
  background-color: white;
  color: #4285f4;
  font-weight: bold;
  font-size: medium;

  &:hover {
    cursor: pointer;
    background-color: #4285f4;
    color: white;
  }
  @media (max-width: 768px) {
    margin-left:35% ;
    margin-right: 35%;
  }
`;

export default function Logo() {
  return (
    <>
      <NameContainer>
        <LogoImage src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png"></LogoImage>
        <LogoNameContainer>
          <CompanyNameContainer>
            Google Developer Student Clubs
          </CompanyNameContainer>
          <CollegeNameContainer>
            National Institue of Technology, Rourkela
          </CollegeNameContainer>
        </LogoNameContainer>
      </NameContainer>
      <StyledButton>Share Your Feedback</StyledButton>
    </>
  );
}
