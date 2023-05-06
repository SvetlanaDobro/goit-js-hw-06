//const input = document.querySelector('#name-input');
//console.log(input)
//const nameLabel = document.querySelector('#name-output')
//console.log(nameLabel);

const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}
console.log(refs);

refs.nameInput.addEventListener('input',onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        refs.nameOutput.textContent = 'Anonymous';
    } else {
        refs.nameOutput.textContent = event.currentTarget.value;
        //refs.nameOutput.textContent = refs.nameInput.value;
    }
};



