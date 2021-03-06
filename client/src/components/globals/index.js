import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
} from 'styled-system';

export const Flex = styled('div').attrs(() => ({
  display: 'flex',
}))(
  compose(
    flexbox,
    space,
    layout,
    typography,
    color,
  ),
);

export const Text = styled('span').attrs(() => ({
  overflowWrap: 'break-word',
}))(
  compose(
    typography,
    space,
    color,
  ),
);

export const ErrorMessage = styled.div`
  color: red;
  padding: 15px;
`;
