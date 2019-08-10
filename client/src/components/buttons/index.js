import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  border-radius: 3px;
  cursor: pointer;
`;
