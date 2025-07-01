import styled from "styled-components";
import underMapIcon from '../../assets/icons/undermap_icon.svg';
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  toggleMenu: (state: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({toggleMenu}) => {

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };

  const onChangeMenu = () => {
    toggleMenu(true);
  }

  return (
    <>
      <PcWrapper>
        <HeaderWrapper onMouseEnter={()=> toggleMenu(true)}>
          <HeaderContent>
            <img src={underMapIcon} alt="로고" onClick={handleLogoClick} style={{cursor:'pointer'}}/>
            <HeaderMenu>
              <MenuText href="#">지역별지하상가</MenuText>
              <MenuText href="#">세부정보</MenuText>
              <MenuText href="#">만든 이</MenuText>
              <MenuText href="#">만든 이</MenuText>
            </HeaderMenu>
          </HeaderContent>
        </HeaderWrapper>
      </PcWrapper>
      <MobileWrapper>
        <HeaderWrapper>
          <h1>헤더(mobile)</h1>
        </HeaderWrapper>
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

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: #ffffff70;
  border-bottom: 1px solid #6d6d6d69;
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > *:last-child {
    display: none;
  }

  @media (max-width: 1250px) {
    & > *:last-child {
      display: block;
      opacity: 0;
    }
  }
`;

const MenuText = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #6D6D6D;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #4a4a4a;
  }
`;