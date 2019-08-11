import styled from 'styled-components';

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.neutral[300]};

  border: 1px solid lightblue;
  border-width: 0 0 15px 0;
  border-radius: 0% 0% 100% 100%;
`;

export const Side = styled.div.attrs(({ left }) => ({
  deg: left ? 2 : -2,
  move: left ? -20 : 20,
}))`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.neutral[300]};
  transform: rotate(${({ deg }) => deg}deg)
    translate(${({ move }) => move}px, 0px) scale(2);

  &:after {
    content: 'Exit';
    position: absolute;
    left: ${({ left }) => (left ? 'auto' : 0)};
    right: ${({ left }) => (left ? 0 : 'auto')};
    height: 50px;
    background: green;
    text-align: center;
    top: 30%;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: ${({ left }) => left && 'rotate(180deg)'};
  }
`;

export const ExitSign = styled.div``;
