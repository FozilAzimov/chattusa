import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as volumeOn } from "../../assets/icons/volume-on.svg";
import { ReactComponent as volumeOff } from "../../assets/icons/volume-off.svg";
import { ReactComponent as envelope } from "../../assets/icons/envelope.svg";
import { ReactComponent as bars } from "../../assets/icons/bars.svg";
import { ReactComponent as logout } from "../../assets/icons/login.svg";
import { ReactComponent as help } from "../../assets/icons/help.svg";

const Icons = styled.div``;

Icons.VolumeOn = styled(volumeOn)`
width: 25px;
`;
Icons.VolumeOff = styled(volumeOff)`
width: 15px;
`;
Icons.Envelope = styled(envelope)`
width: 25px;
`;
Icons.Bars = styled(bars)`
width: 20px;
`;
Icons.Logout = styled(logout)`
width: 12px;
`;
Icons.Help = styled(help)`
width: 12px;
`;

const Wrapper = styled.div`
background: #fff;
padding: .5rem 1rem;
border-bottom: 4px solid #f2f2f2;
`;

const Container = styled.div`
max-width: 1440px;
width: 100%;
height: 43px;
padding: 0 15px;
margin: 0 auto;
display: flex;
align-items: center;
`;

const SubWrapper = styled.div`
width: 100%;
height: 43px;
display: flex;
align-items: center;
gap: 20px;
`;

const Section = styled.div`
display: flex;
:hover{
  color: rgba(0,0,0,.7);
}
`;

const Logo = styled.img`
width: 140px;
margin-right: 15px;
cursor: pointer;
`;


const LinkWrapper = styled.div`
width: inherit;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Location = ({ location }) => {
  switch (location) {
    case "left": return "inline-block";
    case "right": return "none";
  }
}

const Link = styled(NavLink)`
display: ${Location};
margin-right: 15px;
text-decoration: none;
color: rgba(0,0,0,.5);
`;

const LocationContact = ({ location }) => {
  switch (location) {
    case "left": return "none";
    case "right": return "inline-block";
  }
}

const LinkContact = styled(NavLink)`
display: ${LocationContact};
text-decoration: none;
color: rgba(0,0,0,.5);
`;

const LinkWrapperTo = styled.div`
width: inherit;
display: flex;
justify-content: end;
align-items: center;
`;

const Box = styled.div`
width: 220px;
display: flex;
justify-content: space-between;
align-items: center;
:hover{
  border: 1px solid #f2f2f2;
  background: #f2f2f2;
  cursor: pointer;
}
:active{
  transform: scale(1.02);
}
`;
const Item = styled.div`
width: 65px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
border-width: 1px 1px 4px 1px;
border-style: solid;
border-color: #f2f2f2;
border-radius: .25rem;
padding: .5rem 1rem;
:hover{
  border: none;
}
`;

const Menu = styled.div`
display: grid;
flex-direction: column;
align-items: start;
padding: 8px 10px;
width: 130px;
background: #fff;
box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
gap: 10px;
border-radius: 2px;
position: absolute;
left: -30px;
top: 5px;
:hover{
  background: #f3f3f3;
}
`;

const ListWrap = styled.div`
width: 100% !important;
padding: 5px;
width: fit-content;
display: flex;
align-items: center;
cursor: pointer;
gap: 10px;
`;

const List = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #000;
cursor: pointer;
margin-left: 15px;
`;


export {
  Wrapper,
  Container,
  SubWrapper,
  Section,
  Logo,
  LinkWrapper,
  Link,
  LinkContact,
  LinkWrapperTo,
  Box,
  Item,
  Icons,
  Menu,
  ListWrap,
  List
}