import styled from "styled-components";
import people_bg from '../../assets/bg/people.png';
import { Scrollpage } from "../motion/Scrollpage";
import decoText from '../../assets/text/title_text.svg';

export const StartTitle = () => {
  return (
    <StartTitleWrapper>
      <StartBgLayer people_bg={people_bg}/>
      <StartTitleCover/>
      <StartTitleContent>
        <TextWrapper>
          <TitleText>전국 지하상가의 모든 것을 담다</TitleText>
          <img src={decoText} alt="모든 지하상가" width={800}/>
        </TextWrapper>
        <Scrollpage/>
      </StartTitleContent>
    </StartTitleWrapper>
  );
};


const StartTitleWrapper = styled.div`
  width: 100%;
  height: 516px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const StartBgLayer = styled.div<{ people_bg: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.people_bg})`};
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

const StartTitleCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  opacity: 0.6;
`;

const StartTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 30px 0;
  width: 100%;
  height: 100%;
  gap: 40px;
  z-index: 10;
`
  
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 74px;
  flex-direction: column;
  box-sizing: border-box;
`;

const TitleText = styled.h1`
  margin: 0; 
  font-size: 60px;
  font-weight: 100;
  color: #fff;
`;