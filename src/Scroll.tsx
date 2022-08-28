import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Hanbok from './assets/image/hanbok.svg';
import Logo from './assets/icons/logo.svg';
import Back from './assets/icons/back.svg';

const Wrap = styled.div`
width: 375px;
height: 100%;
margin: 50px auto;
border: 1px solid #ddd;
`;
const Container = styled.div`
width: 100%;
height: 100%;
`;
const Img = styled.div`
svg{
  width: 100%;
}
`;

const Nav = styled.div`
position: sticky;
top: 0;
width: 100%;
height: 64px;
padding:  20px 25px;
background: #fff;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
h4{
  font-size:12px;
  line-height: 16px;
}
`;
const NavFix = styled.div`
display: flex;

h4{
  padding-left: 20px;
  font-size:12px;
  line-height: 16px;
}
`;

const Content = styled.div`
padding: 20px;
h2{
  font-size: 21px;
  font-weight: bold;
}
h3{
  margin: 24px 0px 24px;
  color: #6A30F9;
}


li{
width: 100%;
padding-bottom: 15px;
span{
  padding-right: 24px;
}
}
li:last-child {
  padding-top: 10px;
}
`;

const Box = styled.div`
width: 100%;
height: 64px;
margin:24px 0 24px;
background: #a589ec;
`;

export default function Scroll(): JSX.Element {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrap>
      <Container>
        <Nav className={scrollY < 468 ? 'a' : 'b'}>
          {scrollY < 468
            ? <Logo />
            : (
              <NavFix>
                <Back />
                <h4>
                  평범한 한복데이트는 그만! 고퀄리티
                  <br />
                  한복대여  체험단 모집
                </h4>
              </NavFix>
            )}

        </Nav>
        <Img>
          <Hanbok />
        </Img>
        <Content>
          <h2>평범한 한복데이트는 그만! 고퀄리티 한복대여  체험단 모집</h2>
          <h3>
            모집중
          </h3>
          <ul>
            <li>
              <span>제공내역</span>
              한국 개량한복 3SET
            </li>
            <li>
              <span>지원인원</span>
              83 명
            </li>
            <li>
              <span>모집인원</span>
              50 명
            </li>
            <li>
              <span>신청기간</span>
              12.01 ~ 12.15
            </li>
          </ul>
          <Box />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at adipisci fugiat
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at adipisci fugiat
          </p>
          <Box />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at adipisci fugiat
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at adipisci fugiat
          </p>
          <Box />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at adipisci fugiat
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium at adipisci fugiat
          </p>

        </Content>
      </Container>
    </Wrap>
  );
}
