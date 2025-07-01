import { motion } from "framer-motion";
import styled from "styled-components"

type StartButtonProps = {
  titleText: string;
  onClick?: () => void;
}

export const StartButton:React.FC<StartButtonProps> = ({titleText, onClick}) => {
  return (
    <Button onClick={onClick}
    >
      {titleText}
    </Button>
  )
}

const Button = styled.button`
  width: 385px;
  height: 57px;
  background: linear-gradient(92deg, #790699 -0.72%, #320699 16.87%, #3D64AC 62.31%, #28BFB2 97.83%), #888;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: #fff;
  font-weight: 500;
  font-size: 26px;
`;


