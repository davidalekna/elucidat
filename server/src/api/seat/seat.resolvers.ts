export default {
  Query: {
    getSeats: async (_, args, { instance }) => {
      const { data } = await instance.get('seats');
      return data;
    },
    getAvailableSeats: async (_, { input }, { instance }) => {
      const { disabled } = input;
      const { data } = await instance.get(
        `seats?disabilityAccessible=${disabled}`,
      );
      return data.map(seat => seat.seatNumber);
    },
    getCheapestSeat: async (_, args, { instance }) => {
      const { data } = await instance.get('seats');
      const getPrice = (s: string) => parseFloat(s.replace(/[^0-9.-]+/g, ''));
      const [cheapest] = data.sort((a, b) => {
        return getPrice(a.price) - getPrice(b.price);
      });
      return [cheapest.seatNumber];
    },
  },
  Mutation: {
    bookSeat: async (_, { input }, { instance }) => {
      const { seatNumber } = input;
      console.log(seatNumber);
      // TODO
      return {};
    },
  },
};
