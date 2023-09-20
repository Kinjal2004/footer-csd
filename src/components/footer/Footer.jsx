import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import ContactDetails from './ContactDetails'
import ColumnsList from './ColumnsList'
import RightsComponent from './RightsComponent'

const FooterContainer = styled.footer`
    //background-color: aquamarine;
    width: 100vw;
    height: 480px;

`
const FeedBackContainer = styled.div`
    display: flex;
    justify-content: space-around;
    //background-color: greenyellow;
    height: 170px;
    padding: 10px;
`
const LogoContainer = styled.div`
    //background-color: pink;
    width: 60%;
    margin: 5px;
`
const LocationContainer = styled.div`
    //background-color: white;
    width: 35%;
    margin: 5px;
`
const ExternalLinksContainer = styled.div`
    //background-color: purple;
    height: 170px;
    padding: 10px;
`
const HorizontalLine = styled.hr`
  width: 84%;
  border: 1px solid #BBB; 
`;
const RightsContainer = styled.div`
  height: 50px;
  //background-color: blueviolet;
  padding: 10px;
`

export default function Footer() {
  return (
    <>
        <FooterContainer>
            <FeedBackContainer>
                <LogoContainer><Logo /></LogoContainer>
                <LocationContainer><ContactDetails /></LocationContainer>
            </FeedBackContainer>
            <ExternalLinksContainer><ColumnsList /></ExternalLinksContainer>
            <HorizontalLine />
            <RightsContainer><RightsComponent /></RightsContainer>
        </FooterContainer>
    </>
  )
}
