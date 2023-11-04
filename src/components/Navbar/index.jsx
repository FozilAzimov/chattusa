import React, { useState } from 'react';

import {
  Box,
  Container,
  Icons,
  Item,
  Link,
  LinkContact,
  LinkWrapper,
  LinkWrapperTo,
  ListWrap,
  Logo,
  Menu,
  Section,
  SubWrapper,
  Wrapper
} from './style';

import logo from '../../assets/images/logo.png';

import { Outlet, useNavigate } from 'react-router-dom';
import navbar from '../../utils/navbar';
import { Dropdown, List } from 'antd';

export default function Navbar () {

  const navigate = useNavigate();
  const [type, setType] = useState(true);

  const Click = () => {
    const token = localStorage.getItem('token');
    token ? navigate('/chat') : navigate('/home');
  }
  const Logout = () => {
    navigate('/home');
    localStorage.removeItem('token');
  }
  const Help = () => {
    navigate('/about');
  }

  return (
    <>
      <Wrapper>
        <Container>
          <SubWrapper>
            <Section onClick={Click}>
              <Logo src={logo} />
            </Section>
            <LinkWrapper>
              {
                localStorage.getItem('token')
                  ? <LinkWrapperTo>
                    <Box>
                      <Item onClick={() => setType(!type)}>
                        {
                          type ? <Icons.VolumeOn /> : <Icons.VolumeOff />
                        }

                      </Item>
                      <Dropdown
                        trigger={['click']}
                        dropdownRender={() => {
                          return (
                            <Menu>
                              <ListWrap>
                                <List data-name='myprofile'>Sms bor</List>
                              </ListWrap>
                            </Menu>
                          )
                        }}
                      >
                        <Item>
                          <Icons.Envelope />
                        </Item>
                      </Dropdown>
                      <Dropdown
                        trigger={['click']}
                        dropdownRender={() => {
                          return (
                            <Menu>
                              <ListWrap onClick={Help}>
                                <Icons.Help />
                                <List data-name='myprofile'>Help</List>
                              </ListWrap>
                              <ListWrap onClick={Logout}>
                                <Icons.Logout />
                                <List data-name='favorites'>Log out</List>
                              </ListWrap>
                            </Menu>
                          )
                        }}
                      >
                        <Item>
                          <Icons.Bars />
                        </Item>
                      </Dropdown>
                    </Box>
                  </LinkWrapperTo>
                  : <>
                    <Section>
                      {
                        navbar.map(({ id, path, title, location, hidden }) => {
                          return !hidden && <Link key={id} to={path} location={location}>{title}</Link>
                        })
                      }
                    </Section>
                    <Section>
                      {
                        navbar.map(({ id, path, title, location, hidden }) => {
                          return !hidden && <LinkContact key={id} to={path} location={location}>{title}</LinkContact>
                        })
                      }
                    </Section>
                  </>
              }
            </LinkWrapper>
          </SubWrapper>
        </Container >
      </Wrapper >
      <Outlet />
    </>
  )
}