const validationInput = document.querySelector('#validation-input');
console.log(validationInput);

validationInput.addEventListener('blur', () => {
    const dataLength = Number(validationInput.getAttribute('data-length'));
    const inputLength = validationInput.value.length;
    
  if (inputLength === dataLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
   } else {
   validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});





