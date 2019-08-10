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
