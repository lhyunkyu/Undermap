import styled from "styled-components"
import { Header } from "../components/common/Header"
import { SubMenu } from "../components/common/SubMenu"
import { useEffect, useState } from "react"
import { StartTitle } from "../components/start/StartTitle"
import { StartButton } from "../components/common/StartButton"
import { Frame } from "../components/start/Frame"

export const Start = () => {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
  <>
    <PcWrapper>
      <StartTitle/>
      <Header toggleMenu={setIsOpenMenu}/>
      <SubMenu openMenu={isOpenMenu} toggleMenu={setIsOpenMenu}/>
      <StartButton titleText="지하상가 탐색 시작하기"/>
      <Frame imgUrl="https://www.daedeok.go.kr/images/dpt_2022/common/logo.png"/>
    </PcWrapper>
    <MobileWrapper>
      <Header toggleMenu={setIsOpenMenu}/>
      <h3>난 모바일</h3>
    </MobileWrapper>
  </>
  )
}

const PcWrapper = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

