import styled from 'styled-components';

export const Seat = styled.button`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  justify-self: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: ${({ isAvailable, theme }) =>
    isAvailable ? theme.colors.primary[100] : '#999'};
  background: ${({ isAvailable, cheapestSeat, theme }) => {
    if (isAvailable) return theme.colors.neutral[400];
    return theme.colors.neutral[200];
  }};
  cursor: ${({ isAvailable }) => (isAvailable ? 'pointer' : 'not-allowed')};
  user-select: none;

  &:hover {
    background: ${({ isAvailable }) => isAvailable && 'green'};
  }

  &:after {
    content: ' ';
    position: absolute;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    width: 74%;
    height: 84%;
    background: rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
