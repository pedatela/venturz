const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

// Middlewares
const authMiddleware = require('./app/middlewares/auth');

// Controllers
const AuthenticateController = require('./app/controllers/AuthenticateController');
const HealthCheckController = require('./app/controllers/HealthCheckController');
const UsersController = require('./app/controllers/UsersController');
const ShopsController = require('./app/controllers/ShopsController');
const BooksController = require('./app/controllers/BooksController');
const OrdersController = require('./app/controllers/OrdersController');



const routes = new Router();
const upload = multer(multerConfig)


// Teste
routes.get('/healthcheck', HealthCheckController.index);
routes.get('/', HealthCheckController.index);

// Users
routes.post('/users', UsersController.create)

// Login
routes.post('/login', AuthenticateController.login);


routes.use(authMiddleware)

// Shops
routes.get('/shops', ShopsController.index)
routes.post('/shops', ShopsController.create)
routes.put('/shops/:id', ShopsController.update)
routes.get('/shops/:id', ShopsController.show)
routes.get('/shop/all', ShopsController.allShops)
routes.delete('/shops/:id', ShopsController.delete)

// Books
routes.post('/books', upload.single('file'), BooksController.create)
routes.put('/books/:id', BooksController.update)
routes.delete('/books/:id', BooksController.delete)
routes.get('/books/:id', BooksController.show)
routes.get('/shops/:shop_id/books', BooksController.index)

// Orders
routes.get('/orders', OrdersController.index)
routes.post('/orders', OrdersController.create)

module.exports = routes