const form  = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');
const email = document.querySelector('#mail');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip');
const password = document.querySelector('#pwd');
const rpPwd = document.querySelector('#rp-pwd');
const genderBtns = document.getElementsByName('gender');
genderErrorField = document.querySelector('#gender-error');


email.addEventListener('input', () => {
    checkValidity(email);
})

country.addEventListener('input', () => {
    checkValidity(country);
})

zipCode.addEventListener('input', () => {
    checkValidity(zipCode);
})

password.addEventListener('input', () => {
    checkValidity(password);
})

rpPwd.addEventListener('input', () => {
    checkValidity(rpPwd);
})

genderBtns.forEach((btn) => {
    
    btn.addEventListener('click', () => {
        genderBtns[0].classList.remove('invalid');
        genderBtns[1].classList.remove('invalid');
        genderErrorField.textContent = '';
        genderErrorField.className = 'error';
    })
    
    
})

form.addEventListener('submit', (event) => {

    const invalidFields = document.querySelectorAll('.invalid');
    if (!email.validity.valid) {
        showError(email);
        event.preventDefault();

    } 
     if (!country.validity.valid) {
        showError(country);
        event.preventDefault();
    } 
     if (!zipCode.validity.valid) {
        showError(zipCode);
        event.preventDefault();
    } 
     if (!password.validity.valid) {
        showError(password);
        event.preventDefault();
    } 
     if (!rpPwd.validity.valid || rpPwd.value != password.value) {
        showError(rpPwd);
        event.preventDefault();
    } 
     if (!genderBtns[0].checked && !genderBtns[1].checked) {
        showGenderError();
        event.preventDefault();
    }  

    if (invalidFields.length === 0) {
        alert("Form submitted succesfully!") ; 
    }    
    
})


function showError(inputField ){
    const errorField = document.querySelector(`#${inputField.id} + span.error`);
    if (inputField === email) {
            if(email.validity.valueMissing) {
                errorField.textContent = "Please enter an e-mail address."
            } else if (email.validity.typeMismatch) {
                errorField.textContent = "Please enter a valid e-mail."
            } else if (email.validity.tooShort) {
                errorField.textContent = `E-mail should be at least ${email.minLength} characters. You entered ${email.value.length}.`
            } 
    } else if (inputField === country) {
        if(country.validity.valueMissing) {
            errorField.textContent = "Please enter a country."
        } 
    } else if (inputField === zipCode) {
        if(zipCode.validity.patternMismatch) {
            errorField.textContent = "Zip code must be a number."
            
        } else if (zipCode.validity.tooShort)  {
            errorField.textContent = `Zip code should be at least ${zipCode.minLength} characters. You entered ${zipCode.value.length}.`
        } else if (zipCode.validity.valueMissing) {
            errorField.textContent = "Please enter a zip code."
        }
    } else if (inputField === password) {
        if(password.validity.valueMissing) {
         errorField.textContent = "Please enter a password."
        } else if (password.validity.tooShort) {
            errorField.textContent = `Password should be at least ${password.minLength} characters. You entered ${password.value.length}.`
        }
    } else if (inputField === rpPwd) {
        
        if (rpPwd.validity.valueMissing) {
            errorField.textContent = "Please repeat the password";
        } else if (rpPwd.value != password.value) {
            errorField.textContent = "The passwords don't match!";
        }
    }  
    errorField.classList.add('active');
    inputField.classList.add('invalid');
    
    // or
    //emailError.className = 'error active';
}

function showGenderError() {
    
    genderErrorField.textContent = "Please select a gender";
    genderBtns[0].classList.add('invalid');
    genderBtns[1].classList.add('invalid');
}

function checkValidity(inputField) {
    const errorField = document.querySelector(`#${inputField.id} + span.error`);
    if (inputField.validity.valid) {
        inputField.classList.remove('invalid');
        errorField.textContent = '';
        errorField.className = 'error';
        
    } else {
        showError(inputField);
        
    }

    if (inputField === rpPwd) {        
        if (rpPwd.value != password.value) {
            showError(inputField);
            
        }
    }
}




