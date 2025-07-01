import styled from "styled-components";
import { motion } from "framer-motion";

export const Scrollpage = () => {
  return (
    <ScrollWrapper>
      <ScrollMouse>
        <Dot
          animate={{ y: [11, 50, 11] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut",
            repeatDelay: 0.5, // 🔥 여기!
          }}
        />
      </ScrollMouse>
      <Text>scroll to page</Text>
    </ScrollWrapper>
  )
}

const ScrollWrapper = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #ffffff;
`;

const ScrollMouse = styled.div`
  width: 32px;
  height: 77px;
  border: 3px solid ${"#ffffff"};
  border-radius: 999px;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 6px;
`
const Dot = styled(motion.div)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid ${"#ffffff"};
`;

const Text = styled.span`
  font-size: 20px;
  animation-name: blink;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.2; }
    100% { opacity: 1; }
  }
`;