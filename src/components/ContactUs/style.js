import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
`;

const Container = styled.div`
max-width: 1440px;
width: 100%;
margin: 0 auto;
padding: 0 30px;
`;

const TitleWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const TitleImg = styled.img`
width: 400px;
cursor: pointer;
`;

const Title = styled.strong`
font-size: 24px;
margin: -3px 0 .5rem 0;
`;

const SubTitle = styled.span`
font-size: 18px;
margin: -5px 0 .5rem 0;
color: lightgray;
`;

const FooterTextLink = styled.span`
font-size: .875rem;
font-weight: bolder;
color: #158CBA;
`;


const Box = styled.div`
width: 100%;
margin: 20px 30px 0 30px;
padding: 4rem 2rem;
background: #fafafa;
border: 1px solid #f0f0f0;
border-radius: .3rem;
box-shadow: inset 0 2px 0 rgba(0,0,0,.05);
display: flex;
justify-content: center;
align-items: center;
`;


const Form = styled.form`
width: 330px;
`;

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
margin-bottom: 16px;
:focus{
  border: 1px solid #61c6ed;
}
`;

const Label = styled.label`
display: inline-block;
margin-bottom: .5rem;
font-size: .875rem;
`;

const Input = styled.input`
width: 100%;
box-shadow: inset 0 2px 0 rgba(0,0,0,.075);
padding: 0.5rem 0.75rem;
font-size: .875rem;
line-height: 1.25;
color: #333;
background: #fff;
border: 1px solid rgba(0,0,0,.15);
border-radius: 0.25rem;
outline: none;
`;

const Textarea = styled.textarea`
width: 100%;
box-shadow: inset 0 2px 0 rgba(0,0,0,.075);
padding: 0.5rem 0.75rem;
font-size: .875rem;
line-height: 1.25;
color: #333;
background: #fff;
border: 1px solid rgba(0,0,0,.15);
border-radius: 0.25rem;
outline: none;
`;

const BtnWrapper = styled.div`
display: flex;
justify-content: end;
:hover{
margin-top: 1px;
border-bottom-width: 3px;
background-color: #106a8c;
border-color: #0c516c;
border-width: 0 1px 4px;
border-style: solid;
line-height: 1.25;
transition: all .2s ease-in-out;
}
`;

const Btn = styled.div`
border-width: 0 1px 4px 1px;
border-style: solid;
border-color: #127ba3;
background: #158CBA;
color: #fff;
text-transform: uppercase;
font-size: 12px;
font-weight: 700;
line-height: 1.25;
padding: 0.5rem 1rem;
border-radius: 0.25rem;
cursor: pointer;
`;







const FooterTitle = styled.div`
font-size: 1.75rem;
font-weight: 400;
color: #555;
text-align: center;
padding: 0 10px;
margin: 60px 0 10px 0;
`;

const SubFooterParagrf = styled.p`
font-size: .875rem;
font-weight: 400;
color: #555;
text-align: center;
padding: 0 10px;
:hover{
  text-decoration: underline;
  cursor: pointer;
  color: #0d5875;
}
`;

export {
  Box,
  Container,
  FooterTextLink,
  FooterTitle,
  SubFooterParagrf,
  SubTitle,
  Title,
  TitleImg,
  TitleWrapper,
  Wrapper,
  Form,
  InputWrapper,
  Label,
  Input,
  Textarea,
  BtnWrapper,
  Btn,
}