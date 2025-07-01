import styled from "styled-components";


type SubMenuProps = {
  openMenu: boolean;
  toggleMenu: (state: boolean) => void;
}

export const SubMenu: React.FC<SubMenuProps> = ({openMenu,toggleMenu}) => {
  return (
    <>
      <PcWrapper onMouseLeave={() => toggleMenu(false)}>
        {(openMenu === true) ?(
          <SubMenuWrapper>
            <SubMenuContent>
              <p> </p>
              <Menu>
                <MenuTexts>
                  <MenuText href="#">서울특별시</MenuText>
                  <MenuText href="#">인천광역시</MenuText>
                  <MenuText href="#">대전광역시</MenuText>
                </MenuTexts>
                <MenuText href="#">세부정보</MenuText>
                <MenuText href="#">만든 이</MenuText>
                <MenuText href="#">만든 이</MenuText>
            </Menu>
            </SubMenuContent>
          </SubMenuWrapper>
        ) : (
          <></>
        )
        }
      </PcWrapper>
      <MobileWrapper>

      </MobileWrapper>
    </>
  )
}


const PcWrapper = styled.div`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`

const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`

const SubMenuWrapper = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 284px;
  background-color: #ffffff70;
  backdrop-filter: blur(10px);
  z-index: 99;
`;

const SubMenuContent = styled.div`
  align-items: start;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  padding-top: 20px;
  & > *:last-child{
    display: none;
  }

  @media (max-width: 1250px) {
    & > *:last-child {
      display: block;
      opacity: 0;
    }
  }
`;

const MenuTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const MenuText = styled.a`
  font-size: 18px;
  color: #6D6D6D;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #4a4a4a;
  }
`