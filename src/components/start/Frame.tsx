import styled from "styled-components";
import circle from '../../assets/icons/undermap_icon.svg';

type FrameProps = {
  imgUrl: string
}

export const Frame: React.FC<FrameProps> = ({ imgUrl }) => {
  return (
    <ImgWrapper imgs={circle}>
      <ImgContent src={imgUrl} alt={`이미지 주소:${imgUrl}`}/>
    </ImgWrapper>
  );
};

// 커스텀 props 타입 지정
const ImgWrapper = styled.div<{ imgs: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width:630px;
  height: 525px;
  background-image: ${(props) => `url(${props.imgs})`};
  background-size: cover;
  background-position: center;
  border: solid 1px;
`;

const ImgContent = styled.img`
  width: 630px;
  height: 324px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  object-fit: cover;
`;
