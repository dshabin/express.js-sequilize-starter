import "@babel/polyfill/noConflict";
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config.json';
import DB from './db';
import routes from './routes/index';

const app = express();
app.use(morgan('dev'));
app.use(cors({
	exposedHeaders: config.corsHeaders
}));
app.use(bodyParser.json({
	limit: config.bodyLimit
}));
app.use('/api', routes);
const server = http.createServer(app);
const database = DB.init();
const port = process.env.PORT || config.port
server.listen(port)
console.log(`--- Server listening on port ${port} ---`)
export {database}