import React from "react";
import styled from "styled-components";
//import LocationLogo from "./static/Screenshot 2023-09-20 at 5.29.50 PM.png";
import ContactData from "./static/ContactData.json";

const ContactContainer = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const ContactList = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const ContactImage = styled.img`
  height: 50px;
  padding: 3px;
`;
const ContactHeading = styled.div`
  padding-top: 7px;
  padding-left: 15px;
  font-size: 25px;
`;

export default function ContactDetails() {
  return (
    <>
      <ContactContainer>
        {ContactData.map((item) => {
          return (
            <ContactList key={item.id}>
              <ContactImage src={require(`./${item.imageURL}`)} />
              <ContactHeading>{item.header}</ContactHeading>
            </ContactList>
          );
        })}
      </ContactContainer>
    </>
  );
}
