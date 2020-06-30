module.exports = {
  newBook: async (parent, args, { models }) => {
    return await models.Book.create({
      content: args.content,
      author: 'Túlio Freitas'
    });
  },
  deleteBook: async (parent, { id }, { models }) => {
    try {
      await models.Book.findOneAndRemove({ _id: id });
      return true;
    } catch (err) {
      return false;
    }
  },
  updateBook: async (parent, { content, id }, { models }) => {
    try {
      return await models.Book.findOneAndUpdate(
        {
          _id: id
        },
        {
          $set: {
            content
          }
        },
        {
          new: true
        }
      );
    } catch (err) {
      throw new Error('Error updating book');
    }
  }
}