 const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    const dataLength = Number(validationInput.getAttribute('data-length'));
  const inputLength = validationInput.value.trim().length;
  
const setValidationState = (el, state) => {
  el.classList.remove('valid', 'invalid');
  el.classList.add(state);
  };
  
   if (inputLength === dataLength) {
    setValidationState(validationInput, 'valid');
  } else {
    setValidationState(validationInput, 'invalid');
  } 
});

