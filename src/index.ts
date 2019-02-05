import express from 'express';
import exhbs from 'express-handlebars';
import path from 'path';

// Importing routes
import IndexRoutes from './routes';
import BooksRoutes from './routes/books';

//Initializations
const app = express();
import './database';

//Setings
app.set('port', process.env.PORT || 4400);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout:'main'  
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', IndexRoutes);
app.use('/books', BooksRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});