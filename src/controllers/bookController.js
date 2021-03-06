const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('server:bookController');

/**
 *
 * @param bookService
 * @param nav
 * @returns {{getIndex, getById, middleware}}
 */
function bookController(bookService, nav) {
  function getIndex(req, res) {
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';
    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        debug('Connected correctly to server');

        const db = client.db(dbName);

        const col = await db.collection('books');

        const books = await col.find().toArray();

        res.render('bookListView', {
          nav,
          title: 'Stories',
          books,
        });
      } catch (err) {
        debug(err.stack);
      }
      client.close();
    })();
  }

  /**
   *
   * @param req
   * @param res
   */
  function getById(req, res) {
    const { id } = req.params;
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        debug('Connected correctly to server');

        const db = client.db(dbName);

        const col = await db.collection('books');

        const book = await col.findOne({ _id: new ObjectID(id) });
        debug(book);

        book.details = await bookService.getBookById(book.bookId);
        res.render('bookView', {
          nav,
          title: 'Stories',
          book,
        });
      } catch (err) {
        debug(err.stack);
      }
    })();
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  function middleware(req, res, next) {
    // more like: req.user.admin, req.user.roles
    if (req.user) {
      next();
    } else {
      res.redirect('/');
    }
  }

  return {
    getIndex,
    getById,
    middleware,
  };
}

module.exports = bookController;
