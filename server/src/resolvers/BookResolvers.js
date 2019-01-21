const resolvers = {
  Query: {
    books: async (_, a, { Books }) => await Books.find(),
    book: async (_, { name }, { Books }) => await Books.findOne({ name }),
  },
  Mutation: {
    writeBook: async (_, bookData, { Books }) => {
      return await Books.create({
        ...bookData,
      }).catch(err =>
        console.log(
          `And error has occurred trying to submit ${bookData.name}: ${err}`,
        ),
      );
    },
  },
};

export default resolvers;
