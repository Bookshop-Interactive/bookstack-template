const demoData = [
  {
    title: 'Hello world!',
  },
  {
    title: 'Hello worlds!',
  },
];

const resolvers = {
  Query: {
    books: () => demoData,
  },
};

export default resolvers;
