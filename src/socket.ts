import {WebSocketServer, WebSocket } from "ws";

export enum SocketType {
    CONNECTION = 'connection',
    MESSAGE = 'message'
};

// siin on tegevused, mida kliendilt ootame
export interface ChatData {
    username: string;
    message: string;
    date: string;
};

export default function socket({wss} : {wss: WebSocketServer}) {
    console.log('Socket runs');

    wss.on(SocketType.CONNECTION, (ws: WebSocket) => {
        console.log('is nice');
        ws.on(SocketType.MESSAGE, (message: string) => {
            const data = JSON.parse(message) as ChatData;
            data.date= new Date().toISOString();
            ws.send(JSON.stringify(data));
        });
    });
};