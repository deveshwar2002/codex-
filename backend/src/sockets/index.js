import { Server } from 'socket.io';
import { notificationService } from '../services/notificationService.js';

export function configureSockets(server) {
  const io = new Server(server, {
    cors: { origin: '*' }
  });

  notificationService.setIo(io);

  io.on('connection', (socket) => {
    socket.on('booking:subscribe', (bookingId) => socket.join(`booking:${bookingId}`));
    socket.on('chat:join', (roomId) => socket.join(`chat:${roomId}`));

    socket.on('chat:message', ({ roomId, message, senderId }) => {
      io.to(`chat:${roomId}`).emit('chat:message', {
        roomId,
        message,
        senderId,
        createdAt: new Date().toISOString()
      });
    });
  });

  return io;
}
