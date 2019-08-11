import React from 'react';
import { ModalWrapper } from './styles';
import { Flex } from '../globals';

function ModalContainer({ children }) {
  return (
    <ModalWrapper>
      <Flex flexDirection="column" p={5}>
        {children}
      </Flex>
    </ModalWrapper>
  );
}

export default ModalContainer;
