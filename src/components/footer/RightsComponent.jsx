import React from "react";
import styled from "styled-components";
import Policy from "./static/Policy.json";
const Container = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    padding-left: 170px;
    padding-right: 100px;
`
const RightsContent = styled.div`
  display: flex;
  //padding-left: 150px;
`;
const CopyRightImage = styled.img`
  padding-top: 5px;
  height: 10px;
`;
const RightReservedText = styled.div`
  margin-bottom: 5px;
`;
const PolicySettings = styled.div`
  text-underline-position: 1px;
  display: flex;
`;
const PolicyList = styled.div`
    padding-left: 30px;
    font-size: 15px;
    text-decoration: underline;
`

export default function RightsComponent() {
  return (
    <Container>
      <RightsContent>
        <CopyRightImage src="https://banner2.cleanpng.com/20180729/url/kisspng-copyright-symbol-all-rights-reserved-registered-tr-symbol-of-email-5b5e8b81e2def4.1959760215329227539293.jpg" />
        <RightReservedText>2022,All rights reserved.</RightReservedText>
      </RightsContent>
      <PolicySettings>
        {Policy.map((item) => {
          return (
            <PolicyList key={item.id}>{item.name}</PolicyList>
          );
        })}
      </PolicySettings>
    </Container>
  );
}
