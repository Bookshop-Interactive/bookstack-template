const demoData = [
  {
    title: 'Hello world!',
  },
  {
    title: 'Hello world!',
  },
];

const resolvers = {
  Query: {
    books: () => demoData,
  },
};

export default resolvers;
