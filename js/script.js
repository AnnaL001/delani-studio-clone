// Form validation
function processFormInputs(inputName, inputEmail, inputMessage, event){
  if(validateName(inputName) && validateEmail(inputEmail) && validateMessage(inputMessage)){
    event.target.submit();
    createSuccessAlert(`${inputName} we have received your message. Thank you for reaching out to us`);
    event.target.reset();
  }else{
    // Prevent form submission
    event.preventDefault();
  }
}

const validateName = (inputName) => {
  let isValid = false;

  if(/^[a-zA-Z]{2,}/.test(inputName)){
    isValid = true;
  } else {
    createErrorAlert("Name should contain two or more alphabet characters");
  }

  return isValid;
};

const validateEmail = (inputEmail) => {
  let isValid = false;

  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,}$/.test(inputEmail)){
    isValid = true;
  } else {
    createErrorAlert("Email format should be like name@example.com");
  }

  return isValid;
};

const validateMessage = (inputMessage) => {
  let isValid = false;

  if(/^\D\w+(\W+)*/.test(inputMessage)){
    isValid = true;
  } else {
    createErrorAlert("Message should contain one or more word/sentences");
  }

  return isValid;
};


const createErrorAlert = (message) => {
  let div = document.createElement('div');
  div.classList.add('alert','alert-danger', 'alert-dismissible', 'fade', 'show');
  div.setAttribute('role', 'alert');
  div.textContent = message;
  createDismissButton(div);

  let alertSection = document.getElementById('alerts');
  alertSection.appendChild(div);
}

const createSuccessAlert = (message) => {
  let div = document.createElement('div');
  div.classList.add('alert','alert-warning', 'alert-dismissible', 'fade', 'show');
  div.setAttribute('role', 'alert');
  div.textContent = message;
  createDismissButton(div);

  let alertSection = document.getElementById('alerts');
  alertSection.appendChild(div);
}

const createDismissButton = (divElement) => {
  let button = document.createElement('button');
  button.classList.add('btn-close');
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-dismiss', 'alert');
  button.setAttribute('aria-label', 'Close');
  divElement.appendChild(button);
}

export { processFormInputs };

