import styled, { keyframes } from 'styled-components';

const slideWithBouce = keyframes`
  0% {
    opacity: 0.7;
    transform: scale(1,1) translateY(380px);
  }
  10% {
    opacity: 0.8;
    transform: scale(1.1,.9) translateY(0);
  }
  30% {
    opacity: 0.9;
    transform: scale(.9,1.1) translateY(-25px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05,.95) translateY();
  }
  57% {
    opacity: 1;
    transform: scale(1,1) translateY(0);
  }
  64% {
    opacity: 1;
    transform: scale(1,1) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1,1) translateY(0);
    perspective: 1000;
  }
`;

export const Toast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  position: absolute;
  top: auto;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 400px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.neutral[100]};
  line-height: 1.1em;
  text-align: center;
  color: #9ef542;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 99999;

  animation: ${slideWithBouce} 800ms ease-in-out;
`;
