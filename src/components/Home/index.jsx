import React, { useState } from 'react';

import {
  AvatarImg,
  Box,
  Container,
  Content,
  ContentItem,
  ContentWrapper,
  FooterBox,
  FooterParagrf,
  FooterText,
  FooterTextLink,
  FooterTitle,
  Form,
  FormTitle,
  Icons,
  Input,
  InputWrapper,
  Item,
  Label,
  Login,
  LoginWrapper,
  Option,
  Select,
  SubFooterParagrf,
  SubTitle,
  Title,
  TitleImg,
  TitleWrapper,
  Wrapper
} from './style';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, message } from 'antd';

import img from '../../assets/images/logo.png';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import avatar4 from '../../assets/images/avatar4.png';
import avatar5 from '../../assets/images/avatar5.png';
import avatar6 from '../../assets/images/avatar6.png';
import avatar7 from '../../assets/images/avatar7.png';
import avatar8 from '../../assets/images/avatar8.png';
import avatar9 from '../../assets/images/avatar9.png';
import avatar10 from '../../assets/images/avatar10.png';
import avatar11 from '../../assets/images/avatar11.png';
import avatar12 from '../../assets/images/avatar12.png';
import avatar13 from '../../assets/images/avatar13.png';
import avatar14 from '../../assets/images/avatar14.png';
import avatar15 from '../../assets/images/avatar15.png';
import avatar16 from '../../assets/images/avatar16.png';
import avatar17 from '../../assets/images/avatar17.png';
import avatar18 from '../../assets/images/avatar18.png';
import avatar19 from '../../assets/images/avatar19.png';
import avatar20 from '../../assets/images/avatar20.png';
import avatar21 from '../../assets/images/avatar21.png';
import avatar22 from '../../assets/images/avatar22.png';
import avatar23 from '../../assets/images/avatar23.png';
import avatar24 from '../../assets/images/avatar24.png';
import avatar25 from '../../assets/images/avatar25.png';
import avatar26 from '../../assets/images/avatar26.png';
import avatar27 from '../../assets/images/avatar27.png';
import avatar28 from '../../assets/images/avatar28.png';
import avatar29 from '../../assets/images/avatar29.png';
import avatar30 from '../../assets/images/avatar30.png';
import { useNavigate } from 'react-router-dom';

export default function Home () {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('United State');
  const [age, setAge] = useState('');
  const [avatarM, setAvatarM] = useState(avatar1);
  const [avatarF, setAvatarF] = useState(avatar16);
  const [radio, setRadio] = useState(true);
  const [gender, setGender] = useState('');

  const info = () => {
    message.info('Muvaffaqqiyatli bajarildi!');
  }
  const warning = () => {
    message.warning('Ma`lumotlarni to`liq to`ldirilganligiga ishonch hosil qilib qayta urinib ko`ring.');
  }

  const Click = (e) => setAvatarM(e.target.children[0].attributes.src.value);
  const Click2 = (e) => setAvatarF(e.target.children[0].attributes.src.value);

  const data = [
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar1} style={{ width: '60px' }} />
      </a>,
      key: '1',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar2} style={{ width: '60px' }} />
      </a>,
      key: '2',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar3} style={{ width: '60px' }} />
      </a>,
      key: '3',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar4} style={{ width: '60px' }} />
      </a>,
      key: '4',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar5} style={{ width: '60px' }} />
      </a>,
      key: '5',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar6} style={{ width: '60px' }} />
      </a>,
      key: '6',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar7} style={{ width: '60px' }} />
      </a>,
      key: '7',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar8} style={{ width: '60px' }} />
      </a>,
      key: '8',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar9} style={{ width: '60px' }} />
      </a>,
      key: '9',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar10} style={{ width: '60px' }} />
      </a>,
      key: '10',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar11} style={{ width: '60px' }} />
      </a>,
      key: '11',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar12} style={{ width: '60px' }} />
      </a>,
      key: '12',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar13} style={{ width: '60px' }} />
      </a>,
      key: '13',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar14} style={{ width: '60px' }} />
      </a>,
      key: '14',
    },
    {
      label: <a href="#" onClick={Click}>
        <img src={avatar15} style={{ width: '60px' }} />
      </a>,
      key: '15',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar16} style={{ width: '60px' }} />
      </a>,
      key: '16',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar17} style={{ width: '60px' }} />
      </a>,
      key: '17',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar18} style={{ width: '60px' }} />
      </a>,
      key: '18',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar19} style={{ width: '60px' }} />
      </a>,
      key: '19',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar20} style={{ width: '60px' }} />
      </a>,
      key: '20',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar21} style={{ width: '60px' }} />
      </a>,
      key: '21',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar22} style={{ width: '60px' }} />
      </a>,
      key: '22',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar23} style={{ width: '60px' }} />
      </a>,
      key: '23',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar24} style={{ width: '60px' }} />
      </a>,
      key: '24',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar25} style={{ width: '60px' }} />
      </a>,
      key: '25',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar26} style={{ width: '60px' }} />
      </a>,
      key: '26',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar27} style={{ width: '60px' }} />
      </a>,
      key: '27',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar28} style={{ width: '60px' }} />
      </a>,
      key: '28',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar29} style={{ width: '60px' }} />
      </a>,
      key: '29',
    },
    {
      label: <a href="#" onClick={Click2}>
        <img src={avatar30} style={{ width: '60px' }} />
      </a>,
      key: '30',
    },
  ];

  let items = [];

  if (gender === "male") items = data.slice(0, data.length / 2);
  else if (gender === "female") items = data.slice(data.length / 2, data.length);
  else items = data.slice(0, data.length / 2);

  const RadioChange = ({ target: { id } }) => {
    id ? setRadio(false) : setRadio(true);
    setGender(id);
    if (id === "female") {
      setAvatarF(avatar16);
      setAvatarM('');
    }
    else if (id === "male") {
      setAvatarM(avatar1);
      setAvatarF('');
    }
  }
  const getUsername = ({ target: { value } }) => setUsername(value);
  const getCountry = ({ target: { value } }) => setCountry(value);
  const getAge = ({ target: { value } }) => setAge(value);

  const loginClick = () => {
    if (username && country && age && gender && (avatarM || avatarF)) {
      navigate('/chat');
      info();
      localStorage.setItem('token', 'ruxsat');
    }
    else warning();
  };

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
            <FormTitle>Join Chat:</FormTitle>
            <Form>
              <Item>
                <Label htmlFor='username'>Username:</Label>
                <InputWrapper>
                  <Input type='text' id='username' onChange={getUsername} />
                </InputWrapper>
              </Item>
              <Item>
                <Label htmlFor='country'>Country:</Label>
                <InputWrapper>
                  <Select id='country' onChange={getCountry}>
                    <Option value='United States'>United States</Option>
                    <Option value='Uzbekistan'>Uzbekistan</Option>
                    <Option value='Russia'>Russia</Option>
                    <Option value='Germaniya'>Germaniya</Option>
                    <Option value='Italia'>Italia</Option>
                    <Option value='Saudiya Arabistoni'>Saudiya Arabistoni</Option>
                  </Select>
                </InputWrapper>
              </Item>
              <Item>
                <Label htmlFor='age'>Age:</Label>
                <InputWrapper>
                  <Input type='number' id='age' onChange={getAge} />
                </InputWrapper>
              </Item>
              <Item>
                <Label>Gender:</Label>
                <InputWrapper>
                  <Input type='radio' id='male' name='radio' onChange={RadioChange} />
                  <Label type='bold' htmlFor='male' >Male</Label>
                  <Input type='radio' id='female' name='radio' onChange={RadioChange} />
                  <Label type='bold' htmlFor='female'>Female</Label>
                </InputWrapper>
              </Item>
              <Item>
                <Label htmlFor='avatar'>Avatar:</Label>
                <InputWrapper>
                  {
                    gender === "male"
                      ? <Dropdown menu={{ items }} trigger={['click']} disabled={radio}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <AvatarImg src={avatarM} />
                            <DownOutlined />
                          </Space>
                        </a>
                      </Dropdown>
                      : gender === "female"
                        ? <Dropdown menu={{ items }} trigger={['click']} disabled={radio}>
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <AvatarImg src={avatarF} />
                              <DownOutlined />
                            </Space>
                          </a>
                        </Dropdown>
                        : <Dropdown menu={{ items }} trigger={['click']} disabled={radio}>
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <AvatarImg src={avatarM} />
                              <DownOutlined />
                            </Space>
                          </a>
                        </Dropdown>
                  }
                </InputWrapper>
              </Item>
              <Item type="end">
                <InputWrapper type="end">
                  <LoginWrapper>
                    <Login onClick={loginClick}>
                      <Icons.Login />
                      LOGIN
                    </Login>
                  </LoginWrapper>
                </InputWrapper>
              </Item>
              <FooterBox>
                <FooterText>By joining the Chat you agree to our <FooterTextLink>Terms and Conditions</FooterTextLink>
                </FooterText>
              </FooterBox>
              <FooterBox>
                <FooterParagrf>Please read the Chat Rules below before joining to avoid getting banned. <FooterText>KEEP IT CLEAN!</FooterText></FooterParagrf>
              </FooterBox>
            </Form>
          </Box>
        </TitleWrapper>
        <ContentWrapper>
          <Content>
            <FormTitle>Chat Rules:</FormTitle>
            <FooterParagrf>Please read the following rules before joining the chat rooms. Any violation will get you banned from the Chat.</FooterParagrf>
            <ContentItem>
              <FooterText>No Spam:</FooterText> Do not attack or harass others because of their race, religion or anything that is personal.
            </ContentItem>
            <ContentItem>
              <FooterText>No Provocation:</FooterText> Do not send links to websites that are similar to Chattusa or websites that aren't authentic or look suspicious.
            </ContentItem>
            <ContentItem>
              <FooterText>No Bad Links:</FooterText> Do not send links to websites that are similar to Chattusa or websites that aren't authentic or look suspicious.
            </ContentItem>
            <ContentItem>
              <FooterText>No Sexual Harassment:</FooterText> Do not attack or harass people of opposite gender and respect everyone online. <b>Also we do not encourage sex-talk or any other practices here.</b>
            </ContentItem>
            <ContentItem>
              <FooterText>Other rules:</FooterText> Even if we didn't mention everything, any act that is considered a bad behavior will result in a permanent ban.
            </ContentItem>
            <FooterParagrf>Please keep the chat clean or you might get banned for any of the rules mentioned above. We are also working on a "Report" feature that will let you report bad users easily.</FooterParagrf>
            <FooterParagrf>We do not keep our users' data or messages sent here, Chattusa automatically deletes all your message history whenever you logout, making Chattusa totally Anonymous and secure.</FooterParagrf>
          </Content>

          <Content>
            <FormTitle>Updates:</FormTitle>
            <FooterParagrf>More updates are coming... Keep checking this section every now and then!</FooterParagrf>
            <ContentItem type="blue">
              <FooterText>05 October 2019:</FooterText> We tweaked the chat room for an improved user experience by fixing some issues. We are also working on a new Report feature that allows user in the Chat to report other bad behaving users or bots.
            </ContentItem>
            <ContentItem type="blue">
              <FooterText>04 May 2019:</FooterText> Minor bug fixes to the Chat. We are trying our best to keep the Chat rooms as clean as possible, we are banning bots and bad users every day. More than 30,000 users have been banned due to unwanted behavior.
            </ContentItem>
            <ContentItem type="blue">
              <FooterText>2 January 2019:</FooterText> We fixed some bugs and improved the user experience. We also managed to ban more than 2000 users over the last 2 Months.
            </ContentItem>
            <ContentItem type="blue">
              <FooterText>11 October 2018:</FooterText> We redesigned the home page making it easier to use and clutter-free. We also implemented a new Ban System that bans bad users and robots from the Chat, as well as a new contact us page so you can report issues to us.
            </ContentItem>
            <ContentItem type="blue">
              <FooterText>7 October 2018:</FooterText> We fixed some bugs that caused 'new messages' not to display correctly, as well as made some improvements.
            </ContentItem>
            <ContentItem type="blue">
              <FooterText>3 October 2018:</FooterText> We are working on a new Ban System that will get rid of bots and bad users permanently.
            </ContentItem>
          </Content>
        </ContentWrapper>
        <SubFooterParagrf>We do not keep our users' data or messages sent here, Chattusa automatically deletes all your messages history whenever you logout, making Chattusa totally Anonymous and Secure.</SubFooterParagrf>
        <FooterTitle>Chattusa Online Chat Rooms</FooterTitle>
        <SubFooterParagrf>&#169; 2018 - The best free online usa and international chat rooms. Chat online with anyone from all around the world and meet new people. - <FooterTextLink>Privacy Policy</FooterTextLink> - <FooterTextLink>Contact us</FooterTextLink></SubFooterParagrf>
      </Container>
    </Wrapper>
  )
}