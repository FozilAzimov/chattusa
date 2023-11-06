import React from 'react';

import {
  Box,
  ChatTitle,
  Container,
  FooterTextLink,
  FooterTitle,
  IconWrap,
  IconWrapper,
  Icons,
  ItamLeft,
  ItamRight,
  SubFooterParagrf,
  TitleItem,
  TitleWrapper,
  Wrapper
} from './style';

export default function Chat () {

  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <Box>
            <ItamLeft>
              <ChatTitle>
                <IconWrapper>
                  <IconWrap>
                    <Icons.Refresh />
                  </IconWrap>
                </IconWrapper>
                <TitleItem>Chat</TitleItem>
                <TitleItem></TitleItem>
              </ChatTitle>
            </ItamLeft>
            <ItamRight>h</ItamRight>
          </Box>
        </TitleWrapper>
        <FooterTitle>Chattusa Online Chat Rooms</FooterTitle>
        <SubFooterParagrf>&#169; 2018 - The best free online usa and international chat rooms. Chat online with anyone from all around the world and meet new people. -
          <FooterTextLink>Privacy Policy</FooterTextLink> - <FooterTextLink>Contact us</FooterTextLink>
        </SubFooterParagrf>
      </Container>
    </Wrapper>
  )
}