import React from 'react';
import Modal from 'react-modal';
import ModalContainer from '../modalContainer';
import { useSelector, useDispatch } from 'react-redux';
import { modalStyles } from '../styles';
import { closeModal } from 'store/modals/actions';
import { Flex, Text } from 'components/globals';
import { Button } from 'components/buttons';
import { useMutation } from '@apollo/react-hooks';
import { BOOK_SEAT } from 'shared/graphql/mutations/seat/bookSeat';
import { GET_SEATS } from 'shared/graphql/queries/seat/getSeats';

export default function BookingModal(seat) {
  const [bookSeat, { loading, error }] = useMutation(BOOK_SEAT);
  const isOpen = useSelector(state => state.modals.isOpen);
  const dispatch = useDispatch();

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
          <Flex flexDirection="column" mb={2}>
            <Text fontSize={5}>Seat - {seat.seatNumber}</Text>
            <Text>available - {seat.available ? 'yes' : 'no'}</Text>
            <Text>accessable - {seat.disabilityAccessible ? 'yes' : 'no'}</Text>
            <Text>price - {seat.price}</Text>
          </Flex>
          {error && <Flex>{error}</Flex>}
          <Flex>
            <Button
              disabled={loading}
              onClick={() =>
                bookSeat({
                  variables: { input: { seatNumber: seat.seatNumber } },
                  refetchQueries: [{ query: GET_SEATS }],
                }).then(() => dispatch(closeModal()))
              }
            >
              Book this seat
            </Button>
          </Flex>
        </Flex>
      </ModalContainer>
    </Modal>
  );
}
