import http from 'http';
import dotenv from 'dotenv';

import { app } from './app.js';
import { configureSockets } from './sockets/index.js';

dotenv.config();

const port = Number(process.env.PORT || 5000);
const server = http.createServer(app);
configureSockets(server);

server.listen(port, () => {
  console.log(`Backend listening on :${port}`);
});
