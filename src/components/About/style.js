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
`;

const BoxTitle = styled.strong`
display: inline-block;
font-size: 1.75rem;
font-weight: 500;
line-height: 1.1;
margin-bottom: .5rem;
`

const BoxText = styled.p`
font-size: .875rem;
font-weight: 400;
line-height: 1.5;
margin-bottom: 1rem;
`






















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
  Container,
  FooterTextLink,
  FooterTitle,
  SubFooterParagrf,
  SubTitle,
  Title,
  TitleImg,
  TitleWrapper,
  Wrapper,
  Box,
  BoxTitle,
  BoxText,
}