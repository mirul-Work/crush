const button_no = document.getElementById('no-btn');

button_no.addEventListener('click', () => {
  const button = button_no;

  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
});
