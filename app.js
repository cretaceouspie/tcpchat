document.addEventListener('DOMContentLoaded', () => {
  const socket = io();
  const form = document.querySelector('form');
  const input = document.querySelector('#m');
  const messages = document.querySelector('#messages');

  // Generate a random username for each user
  const username = `User${Math.floor(Math.random() * 1000)}`;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', { username, message: input.value });
      input.value = '';
    }
  });

  socket.on('chat message', (data) => {
    const li = document.createElement('li');
    li.textContent = `${data.username}: ${data.message}`;
    messages.appendChild(li);
  });
});
