import React from 'react';
import {
  Box,
  Btn,
  BtnWrapper,
  Container,
  FooterTextLink,
  FooterTitle,
  Form,
  Input,
  InputWrapper,
  Label,
  SubFooterParagrf,
  SubTitle,
  Textarea,
  Title,
  TitleImg,
  TitleWrapper,
  Wrapper
} from './style';

import img from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export default function ContactUs () {

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
          <SubTitle>Contact Us Below</SubTitle>
          <Box>
            <Form>
              <InputWrapper>
                <Label>Name: *</Label>
                <Input type='text' />
              </InputWrapper>
              <InputWrapper>
                <Label>Email: *</Label>
                <Input type='email' />
              </InputWrapper>
              <InputWrapper>
                <Label>Subject: *</Label>
                <Input type='text' />
              </InputWrapper>
              <InputWrapper>
                <Label>Message: *</Label>
                <Textarea />
              </InputWrapper>
              <BtnWrapper>
                <Btn>send message</Btn>
              </BtnWrapper>
            </Form>
          </Box>
        </TitleWrapper>
        <FooterTitle>Chattusa Online Chat Rooms</FooterTitle>
        <SubFooterParagrf>&#169; 2018 - The best free online usa and international chat rooms. Chat online with anyone from all around the world and meet new people. - <FooterTextLink>Privacy Policy</FooterTextLink> - <FooterTextLink>Contact us</FooterTextLink></SubFooterParagrf>
      </Container>
    </Wrapper>
  )
}