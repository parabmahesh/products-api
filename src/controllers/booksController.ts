function booksController(Book:any) {
  return {
    getAllBooks: function getAll(_req:any, res:any) {
      Book.find((err:any, books:any) => {
        if (err) {
          return res.send(err);
        }
        return res.json(books);
      });
    },
    getBookById: function getById(req:any, res:any) {
      const { id } = req.params;
      Book.findById(id, (err:any, book:any) => {
        if (err) {
          return res.send(err);
        }
        return res.json(book);
      });
    },
    createBook: function createBook(req:any, res:any) {
      const book = new Book(req.body);
      book.save((err:any, nBook:any) => {
        if (err) return res.send(err);
        return res.send(nBook);
      });
    },
    updateBook: function updateBook(req:any, res:any) {
      const { id } = req.params;
      Book.findById(id, (err:any, book:any) => {
        if (err) {
          return res.send(err);
        }

        if (book) {
          // const { title, author, price } = req.body;
          // book.title = title;
          // book.author = author;
          // book.price = price;
          book.save();
        }
        return res.json(book);
      });
    },
    deleteBook: function deleteBook(req:any, res:any) {
      const { id } = req.params;
      Book.deleteOne({ _id: id }, (err:any) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    }
  };
}

export default booksController;
