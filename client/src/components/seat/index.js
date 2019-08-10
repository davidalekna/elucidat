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
`;
