import styled from "styled-components";
import { ReactComponent as refresh } from "../../assets/icons/refresh.svg";

const Icons = styled.div``;

Icons.Refresh = styled(refresh)`
width: 15px;
path{
  fill: #fff;
}
`;

const IconWrapper = styled.div`
:hover{
  background: #106a8c;
}
:active{
  transform: scale(1.02);
}
`;

const IconWrap = styled.div`
width: 29px;
height: 29px;
border-radius: 50%;
background: #158CBA;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

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

const FooterTextLink = styled.span`
font-size: .875rem;
font-weight: bolder;
color: #158CBA;
`;


const Box = styled.div`
width: 100%;
margin: 0 30px;
border: 1px solid #f0f0f0;
border-radius: .3rem;
box-shadow: inset 0 2px 0 rgba(0,0,0,.05);
display: flex;
`;

const ItamLeft = styled.div`
width: 67%;
height: 700px;
background: #fff;
box-shadow: 0 10px 20px rgba(0,0,0,.15);
display: flex;
flex-direction: column;
justify-content: space-between;
`;


const ItamRight = styled.div`
width: 33%;
height: 700px;
background: #333;
border: 1px solid #f0f0f0;
border-radius: .3rem;
box-shadow: inset 0 2px 0 rgba(0,0,0,.05);
`;

const ChatTitle = styled.div`
padding: 10px 20px;
width: 100%;
background: #75caeb;
display: flex;
align-items: center;
justify-content: space-between;
`;

const TitleItem = styled.div`
color: #433739;
font-size: 20px;
font-weight: 600;
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
  TitleWrapper,
  Wrapper,
  ItamLeft,
  ItamRight,
  ChatTitle,
  Icons,
  TitleItem,
  IconWrapper,
  IconWrap,
}