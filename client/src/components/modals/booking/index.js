import React from 'react';
import Modal from 'react-modal';
import ModalContainer from '../modalContainer';
import { useSelector, useDispatch } from 'react-redux';
import { modalStyles } from '../styles';
import { closeModal } from 'store/modals/actions';
import { Flex, Text, ErrorMessage } from 'components/globals';
import { Button } from 'components/buttons';
import { useMutation } from '@apollo/react-hooks';
import { BOOK_SEAT } from 'shared/graphql/mutations/seat/bookSeat';
import { GET_SEATS } from 'shared/graphql/queries/seat/getSeats';
import styled from 'styled-components';
import { useToastContext } from 'components/toasts';

const InfoText = styled(Text)`
  font-size: 18px;
  line-height: 1.2em;
`;

export default function BookingModal(seat) {
  const [bookSeat, { loading, error }] = useMutation(BOOK_SEAT);
  const { setToast } = useToastContext();
  const isOpen = useSelector(state => state.modals.isOpen);
  const dispatch = useDispatch();

  const [seatNumber, row] = seat.seatNumber.split('');

  const handleBookSeat = async () => {
    try {
      await bookSeat({
        variables: { input: { seatNumber: seat.seatNumber } },
        refetchQueries: [{ query: GET_SEATS }],
      });
      setToast('Congratulation! Your booking was successfull');
      dispatch(closeModal());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="Seat Booking Modal"
      onRequestClose={() => dispatch(closeModal())}
      shouldCloseOnOverlayClick={true}
      style={modalStyles({ maxWidth: 380 })}
      closeTimeoutMS={330}
    >
      <ModalContainer>
        <Flex flexDirection="column" alignItems="center">
          <Flex flexDirection="column" textAlign="center">
            <Text fontSize={6} fontWeight={2} mb={2}>
              Elucidat
            </Text>
            <Text fontSize={4} mb="25px">
              Movie ticket
            </Text>
            <InfoText>Date: DD/MM/YYYY</InfoText>
            <InfoText>Time: hh:mm</InfoText>
            <InfoText>
              Row: {row} Seat: {seatNumber}
            </InfoText>
            <InfoText>available - {seat.available ? 'YES' : 'NO'}</InfoText>
            <InfoText>
              accessable - {seat.disabilityAccessible ? 'YES' : 'NO'}
            </InfoText>
          </Flex>
          {error && (
            <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>
          )}
          <Flex mt={4}>
            <Button disabled={loading} onClick={handleBookSeat}>
              Book this seat for {seat.price}
            </Button>
          </Flex>
        </Flex>
      </ModalContainer>
    </Modal>
  );
}
