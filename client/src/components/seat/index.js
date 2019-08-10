import styled from 'styled-components';

export const Seat = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  width: 140px;
  height: 140px;
  justify-self: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: ${({ theme }) => theme.colors.primary[100]};
  background: ${({ isAvailable, cheapestSeat, theme }) => {
    if (cheapestSeat && isAvailable) return 'orange';
    if (isAvailable) return theme.colors.neutral[400];
    return theme.colors.neutral[200];
  }};
  cursor: ${({ isAvailable }) => (isAvailable ? 'pointer' : 'default')};
  user-select: none;

  &:hover {
    background: ${({ isAvailable }) => isAvailable && 'green'};
  }

  &:after {
    content: ' ';
    position: absolute;
    margin: 0 auto;
    top: -10px;
    left: 0;
    right: 0;
    width: 80%;
    height: 80%;
    background: rgba(0, 0, 0, 0.2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
