const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };

const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");
const thankYou = document.querySelector(".thankYou");
let isFormValid = false;
let isValidationOn = false;

nameInput.isValid = () => !!nameInput.value;
phoneInput.isValid = () => isValidPhone(phoneInput.value);
emailInput.isValid = () => isValidEmail(emailInput.value);
messageInput.isValid = () => messageInput.value;

const inputFields = [ nameInput, phoneInput,emailInput,messageInput]

const validateInputs = () => {
    if(!isValidationOn) return;
    isFormValid = true;
    inputFields.forEach((input) => {
        input.classList.remove("invalid");
        input.nextElementSibling.classList.add('hide');
    
        if(!input.isValid()){
            isFormValid = false;
            input.classList.add("invalid");
            input.nextElementSibling.classList.remove("hide");
        }
    });  
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if(isFormValid) {
        form.remove();
        thankYou.classList.remove("hide");
    }
});
inputFields.forEach((input) => input.addEventListener("input", validateInputs));