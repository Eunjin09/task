import React from 'react';
import styled from 'styled-components';

import Prev from './assets/icons/prev.svg';
import Next from './assets/icons/next.svg';

const Title = styled.h1`
  padding: 120px 320px;
  font-weight: bold;
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -0.25px;
  span{
    color: #6A30F9;
  }
  @media ${(props) => props.theme.mob} {
    padding: 120px 20px 63px; 
    font-size: 30px;
    line-height: 38px;
  }
`;

const Banner = styled.div`
position: relative;
width: 100%;
height: 495px;
padding: 120px 360px;
background: #9573FF;
color: #fff;
h2 {
  font-size: 40px;
  line-height: 56px;
}
p{
  margin-top: 15px;
  font-weight: blod;
}
@media ${(props) => props.theme.mob} {
  height: 263px;
  padding: 50px 20px;
  }
  h2 {
  font-size: 28px;
  line-height: 35px;
}
p{
  margin-top: 12px;
}
`;

const Slider = styled.div`
position: absolute;
top: -79px; right: 320px;
text-align: right;
@media ${(props) => props.theme.mob} {
  bottom: -91px;
  right: 20px;
  top: auto;
}
`;

const SliderBtn = styled.div`
 svg {
  margin: 0 0 30px 35px;
 }
 @media ${(props) => props.theme.mob} {
  svg:nth-child(2) path {
  fill: #fff;
 }
}
`;

const CtnBox = styled.div`
width: 630px;
height: 458.91px;
background: #FFE600;
box-shadow: 4px 8px 16px 0px rgba(0, 0, 0, 0.2);
@media ${(props) => props.theme.mob} {
  width: 213px;
  height: 160px;
 }
`;

export default function Reactive(): JSX.Element {
  return (
    <>
      <Title>
        With
        {' '}
        <span>withyou company</span>
        <br />
        Will be better.
      </Title>
      <Banner>
        <h2>
          위드유 컴퍼니만의
          <br />
          독보적인 마케팅 전략
        </h2>
        <p>AD Service</p>
        <Slider>
          <SliderBtn>
            <Prev />
            <Next />
          </SliderBtn>
          <CtnBox />
        </Slider>
      </Banner>
    </>
  );
}
