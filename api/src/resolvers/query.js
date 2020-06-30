module.exports = {
  books: async (parent, args, { models }) => {
    return await models.Book.find()
  },
  book: async (parent, args, { models }) => {
    return await models.Book.findById(args.id);
  }
}