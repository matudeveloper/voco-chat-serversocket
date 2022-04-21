import express from 'express';
import {Application} from 'express/ts4.0'
import {createServer} from 'http';
import { WebSocketServer } from 'ws';
import socket from './socket';

const app: Application = express();
const PORT: number = 8080 || parseInt(process.env.PORT as string, 10);
// radix näitab siin komakohtade arvu ehk siin on lubatud 10 komakohta
const httpServer = createServer(app);

const wss = new WebSocketServer( {port: 4000});


httpServer.listen((PORT), () => {
    console.log('Listening on Port: ${PORT}');
    socket({wss});
});