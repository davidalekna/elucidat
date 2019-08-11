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
      const { data: seat } = await instance.get(`seats/${seatNumber}`);
      // seats are served in first come first served basis. If seat was booked
      // it will throw an error to notify the end user.
      if (!seat.available) throw Error('Sorry, this seat was already booked!');
      // otherwise lets book the seat
      const { data } = await instance.put(`seats/${seatNumber}`, {
        ...seat,
        available: false,
      });
      return data;
    },
  },
};
