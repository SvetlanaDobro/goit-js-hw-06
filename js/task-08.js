const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const passvord = formElements.password.value.trim();

    if (!mail || !passvord) {
        alert('Будь ласка, заповніть усі поля форми!');
        return;
    };

    const formData = {
        mail,
        passvord,
    };
    console.log(formData);

    event.target.reset();
};

