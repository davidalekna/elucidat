import React from 'react';
import Modal from 'react-modal';
import ModalContainer from '../modalContainer';
import { useSelector, useDispatch } from 'react-redux';
import { modalStyles } from '../styles';
import { closeModal } from 'store/modals/actions';
import { Seat } from 'components/seat';
import { Flex } from 'components/globals';

export default function AudienceModal(seat) {
  const isOpen = useSelector(state => state.modals.isOpen);
  const dispatch = useDispatch();

  console.log(seat);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="Seat Booking Modal"
      onRequestClose={() => dispatch(closeModal())}
      shouldCloseOnOverlayClick={false}
      style={modalStyles({ maxWidth: 500 })}
      closeTimeoutMS={330}
    >
      <ModalContainer>
        <Flex flexDirection="column" alignItems="center">
          <Flex height="200px" width="90%">
            <Seat>{seat.seatNumber}</Seat>
          </Flex>
        </Flex>
      </ModalContainer>
    </Modal>
  );
}
