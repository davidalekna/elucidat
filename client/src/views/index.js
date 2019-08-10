import React from 'react';
import styled from 'styled-components';
import { Flex } from 'components/globals';
import { Screen, Side } from 'components/screen';
import { Seat } from 'components/seat';
import { Query } from 'react-apollo';
import { GET_THEATER_DATA } from 'shared/graphql/queries/seat/getSeats';
import { Icon } from 'components/icons';

const Container = styled(Flex)`
  display: grid;
  width: 100%;
  height: 100%;
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
  grid-template-rows: auto;
  grid-template-columns: repeat(5, 1fr);
`;

export const RootView = () => {
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
        <Flex alignItems="flex-end" height="100%" p="0 50px 50px 50px">
          <Grid>
            <Query query={GET_THEATER_DATA}>
              {({ loading, error, data }) => {
                if (loading) return 'loading';
                if (error) return 'error';
                const { allSeats, cheapestSeat } = data;
                console.log(data);
                return allSeats.map(seat => (
                  <Seat
                    key={seat.seatNumber}
                    isAvailable={seat.available}
                    cheapestSeat={seat.seatNumber === cheapestSeat[0]}
                  >
                    {seat.disabilityAccessible && (
                      <Flex style={{ position: 'absolute', top: 10 }}>
                        <Icon
                          name="accessible"
                          size={32}
                          style={{ fill: 'aqua' }}
                        />
                      </Flex>
                    )}
                    {seat.seatNumber}
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
