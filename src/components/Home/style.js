import styled from "styled-components";
import { ReactComponent as login } from "../../assets/icons/login.svg";;

const Icons = styled.div``;

Icons.Login = styled(login)`
width: 20px;
height: 20px;
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

const Box = styled.div`
max-width: 760px;
width: 100%;
background: #fafafa;
border: 1px solid #f0f0f0;
box-shadow:  inset 0 2px 0 rgba(0,0,0,.05);
border-radius: .3rem;
padding: 1.5rem 2rem 3rem 2rem;
margin: 20px 30px 32px 30px;
`;

const FormTitle = styled.strong`
font-size: 1.75rem;
margin-bottom: 8px;
display: block;
`;

const Form = styled.form`
margin-left: 20px;
`;

const Item = styled.div`
width: 550px;
display: flex;
align-items: center;
justify-content: ${({ type }) => type === 'end' ? 'end' : 'space-between'};
margin-bottom: 16px;
:focus{
  color: #333;
  border: 1px solid #61c6ed;
}
`;

const LableType = ({ type }) => {
  switch (type) {
    case 'bold': return {
      fontSize: '18px',
      paddingLeft: '6px 5px',
      fontWeight: 'bold',
    }
    default: return {
      fontSize: '1.25rem',
      padding: '5px',
    }
  }
}

const Label = styled.label`
${LableType};
cursor: pointer;
`;

const getType = ({ type }) => {
  switch (type) {
    case "end": return {
      display: 'flex',
      justifyContent: 'end',
    };
    default: return '';
  }
}

const InputWrapper = styled.div`
width: 380px;
${getType};
`;

const InputType = ({ type }) => {
  switch (type) {
    case 'text': return {
      width: '100%',
      padding: '.75rem 1.5rem',
      fontSize: '1.25rem',
      borderRadius: '.3rem',
      boxShadow: 'inset 0 2px 0 rgba(0,0,0,.075)',
      border: '1px solid rgba(0,0,0,.15)',
      background: '#fff',
      outline: 'none',
    };
    case 'number': return {
      width: '50%',
      padding: '.75rem 1.5rem',
      fontSize: '1.25rem',
      borderRadius: '.3rem',
      boxShadow: 'inset 0 2px 0 rgba(0,0,0,.075)',
      border: '1px solid rgba(0,0,0,.15)',
      background: '#fff',
      outline: 'none',
    };
    case 'radio': return {
      width: '10%',
      padding: '.75rem 1.5rem',
      border: '1px solid rgba(0,0,0,0)',
      background: '#fff',
      outline: 'none',
    };
    default: return '';
  }
}

const Input = styled.input`
${InputType};
`;

const Select = styled.select`
width: 100%;
padding: .75rem 1.5rem;
font-size: 1.25rem;
border-radius: .3rem;
box-shadow: inset 0 2px 0 rgba(0,0,0,.075);
border: 1px solid rgba(0,0,0,.15);
background: #fff;
outline: none;
`;

const Option = styled.option``;

const AvatarImg = styled.img`
width: 60px;
`;

const LoginWrapper = styled.div`
:hover{
  background:  #e5e5e5;
  transition: .2s;
}
:active{
  transform: scale(1.02);
  transition: .2s;
}
`;

const Login = styled.div`
padding: .75rem 1.5rem;
border-width: 0 1px 4px 1px;
border-style: solid;
border-color: #dedede;
background: #f0f0f0;
color: #fff;
font-size: 12px;
font-weight: bold;
color: #222;
border-radius: .3rem;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
transition: .2s;
`

const FooterBox = styled.div`
text-align: center;
margin: 30px 0;
`

const FooterText = styled.strong`
font-size: .875rem;
font-weight: bold;
color: #555;
margin-top: 20px;
:hover{
  text-decoration: underline;
  cursor: pointer;
  color: #0d5875;
}
`;

const FooterTextLink = styled.span`
font-size: .875rem;
font-weight: bolder;
color: #158CBA;
`;

const FooterParagrf = styled.p`
width: 100%;
font-size: .875rem;
font-weight: 400;
color: #555;
margin-top: 20px;
`;



const ContentWrapper = styled.div`
max-width: 1440px;
width: 100%;
display: flex;
margin: 0 auto;
`
const Content = styled.div`
flex: 1;
border: 1px solid #f0f0f0;
box-shadow: inset 0 2px 0 rgba(0,0,0,.05);
padding: 4rem 2rem;
border-radius: .3rem;
background: #fafafa;
margin-bottom: 32px;
`

const ContentItem = styled.div`
width: 100%;
border-width: 0 1px 4px 1px;
border-style: solid;
border-color: ${({ type }) => type ? '#127ba3' : '#56bee6'};
border-radius: .25rem;
background: ${({ type }) => type ? '#158CBA' : '#75CAEB'};
padding: 12px 20px;
margin-bottom: 16px;
color: #fff;
line-height: 1.5;
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
  Icons,
  Wrapper,
  Container,
  TitleWrapper,
  TitleImg,
  Title,
  SubTitle,
  Box,
  FormTitle,
  Form,
  Item,
  Label,
  InputWrapper,
  Input,
  Select,
  Option,
  AvatarImg,
  LoginWrapper,
  Login,
  FooterBox,
  FooterText,
  FooterTextLink,
  FooterParagrf,
  ContentWrapper,
  Content,
  ContentItem,
  FooterTitle,
  SubFooterParagrf
}