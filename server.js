const express = require('express');
const chalk = require('chalk');
// Pass server/app in to debug
const debug = require('debug')('server');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport.js')(app);

app.use(express.static(path.join(__dirname, '/public')));
app.use(
 '/css',
 express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);
app.use(
 '/js',
 express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))
);
app.use(
 '/js',
 express.static(path.join(__dirname, '/node_modules/jquery/dist'))
);
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
 { link: '/books', title: 'Book' },
 { link: '/authors', title: 'Author' },
];
// Pass nav in to Routes
const bookRouter = require('./src/routes/booksRoutes')(nav);
const adminRouter = require('./src/routes/adminRouters')(nav);
const authRoute = require('./src/routes/authRoutes')(nav);

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
 res.render('index', {
  nav: [
   { link: '/books', title: 'Books' },
   { link: '/authors', title: 'Authors' },
  ],
  title: 'Stories',
 })
});

app.listen(port, () => {
    debug(`listening on port ${chalk.green(port)} at http://localhost:4000`)
});
