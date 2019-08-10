import React from 'react';
import Modal from 'react-modal';
import ModalContainer from '../modalContainer';
import { useSelector, useDispatch } from 'react-redux';
import { modalStyles } from '../styles';
import { closeModal } from 'store/modals/actions';

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
      style={modalStyles({ maxWidth: 750 })}
      closeTimeoutMS={330}
    >
      <ModalContainer>hello world</ModalContainer>
    </Modal>
  );
}
