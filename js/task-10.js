const refs = {
    input: document.querySelector('#controls input'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    boxesContainer: document.querySelector('#boxes'),
  };

function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
      const size = 30 + i * 10;
      const div = document.createElement('div');
      div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
      boxes.push(div);
    }

    refs.boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    refs.boxesContainer.innerHTML = '';
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.createBtn.addEventListener('click', () => {
    const amount = refs.input.value;
    createBoxes(amount);
  });

  refs.destroyBtn.addEventListener('click', destroyBoxes);
