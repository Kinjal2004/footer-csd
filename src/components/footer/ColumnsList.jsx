import React from "react";
import styled from "styled-components";
import Columns from "./static/Columns.json";
import FollowUs from "./static/FollowUs.json";

const ColumnsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
`;
const ColumnLinks = styled.div`
  padding: 5px;
`;
const FollowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FollowerLinks = styled.div`
  padding-left: 10px;
  padding-bottom: 10px;
`;
const FollowerImages = styled.img`
    height: 20px;
`;

const FollowerLine = styled.div`
    display: flex;
`

export default function ColumnsList() {
  return (
    <div>
      <ColumnsContainer>
        {Columns.map((item) => {
          return (
            <ColumnContainer key={item.id}>
              <Header>{item.header}</Header>
              {item.ColumnLinks.map((link, index) => (
                <ColumnLinks key={index}>{link}</ColumnLinks>
              ))}
            </ColumnContainer>
          );
        })}
        {FollowUs.map((item) => {
          return (
            <FollowerContainer key={item.id}>
              <Header>{item.header}</Header>
              {item.ColumnLinks.map((link, index) => (
              <FollowerLine key={index}>
                <FollowerImages src={link.logo} alt={link.name} />
                <FollowerLinks>{link.name}</FollowerLinks>
              </FollowerLine>
            ))}
            </FollowerContainer>
          );
        })}
      </ColumnsContainer>
    </div>
  );
}
