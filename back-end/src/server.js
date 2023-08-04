import express from 'express';
import { routes } from './routes';
import { initializeDbConnection } from './db';

const PORT = process.env.PORT || 8000;

const app = express();

// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json());

 app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
   });

// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

// Connect to the database, then start the server.
// This prevents us from having to create a new DB
// connection for every request.
initializeDbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    });