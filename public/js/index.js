var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.emit('createMessage', {
  from : 'Subhash',
  text: 'some Message ',
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('NewMessage', message);
});
