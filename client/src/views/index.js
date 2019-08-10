import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Flex, Text } from 'components/globals';
import { Screen, Side } from 'components/screen';
import { Seat } from 'components/seat';
import { Query } from 'react-apollo';
import { GET_SEATS } from 'shared/graphql/queries/seat/getSeats';
import { Icon } from 'components/icons';
import { openModal } from 'store/modals/actions';

const Container = styled(Flex)`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary[100]};
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.neutral[200]},
    ${({ theme }) => theme.colors.neutral[100]}
  );

  grid-template-rows: 1fr auto;
  grid-template-columns: 50px 5fr 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  width: 100%;
  min-height: 80%;
  grid-template-rows: auto;
  grid-template-columns: repeat(5, 1fr);
`;

export const RootView = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Side left />
      <Flex flexDirection="column">
        <Flex
          flex="0 0 auto"
          height="60px"
          justifyContent="center"
          alignItems="center"
        >
          <Screen />
        </Flex>
        <Flex alignItems="flex-end" height="100%" p="0 50px">
          <Grid>
            <Query query={GET_SEATS}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return 'error';
                return data.allSeats.map(seat => (
                  <Seat
                    key={seat.seatNumber}
                    isAvailable={seat.available}
                    disabled={!seat.available}
                    onClick={() =>
                      dispatch(openModal('CREATE_BOOKING_MODAL', seat))
                    }
                  >
                    {seat.disabilityAccessible && (
                      <Flex style={{ position: 'absolute', top: 5, left: 4 }}>
                        <Icon
                          name="accessible"
                          size={18}
                          style={{ fill: 'aqua' }}
                        />
                      </Flex>
                    )}
                    <Flex flexDirection="column">
                      <Text fontSize={4} fontWeight={3} mb={0}>
                        {seat.seatNumber}
                      </Text>
                      {seat.available && <Text fontSize={1}>{seat.price}</Text>}
                    </Flex>
                  </Seat>
                ));
              }}
            </Query>
          </Grid>
        </Flex>
      </Flex>
      <Side />
    </Container>
  );
};
