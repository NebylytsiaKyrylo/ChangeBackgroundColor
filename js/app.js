const button = document.querySelector('button');
const background = document.querySelector('body');
const color = document.querySelector('.color');
const hexData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', () => {
  let newColor = hexGenerator();
  background.style.backgroundColor = newColor;
  background.style.transition = '1s all';
  color.textContent = newColor;
});

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function hexGenerator() {
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hexData[getRandomNumber(0, hexData.length)];
  }

  return color;
}
