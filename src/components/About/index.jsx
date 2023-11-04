import React from 'react';
import {
  Box,
  BoxText,
  BoxTitle,
  Container,
  FooterTextLink,
  FooterTitle,
  SubFooterParagrf,
  SubTitle,
  Title,
  TitleImg,
  TitleWrapper,
  Wrapper
} from './style';

import img from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function About () {

  const navigate = useNavigate();

  const getLink = () => {
    const token = localStorage.getItem('token');
    token ? navigate('/chat') : navigate('/home');
  }

  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <TitleImg src={img} onClick={getLink} />
          <Title>Online Chat Rooms Without Registration</Title>
          <SubTitle>USA Chat Rooms</SubTitle>
          <Box>
            <BoxTitle>About Chattusa</BoxTitle>
            <BoxText>CHATTUSA is a free online chat room for people all over the world. It helps you meet new people, single women and men and make new friends.</BoxText>
            <BoxText>We don't log or keep users' data and messages, making Chattusa totally Anonymous and secure.</BoxText>
            <BoxText>If you want to protect your username and reserve it for personal use only, then you can sign up with your email and keep your nickname safe</BoxText>
            <BoxText>If you encounter any types of issues, please contact us</BoxText>
          </Box>
        </TitleWrapper>
        <FooterTitle>Chattusa Online Chat Rooms</FooterTitle>
        <SubFooterParagrf>&#169; 2018 - The best free online usa and international chat rooms. Chat online with anyone from all around the world and meet new people. - <FooterTextLink>Privacy Policy</FooterTextLink> - <FooterTextLink>Contact us</FooterTextLink></SubFooterParagrf>
      </Container>
    </Wrapper>
  )
}