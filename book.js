const myForm = document.querySelector('#addForm');
const nameInput  = document.querySelector('#fname');
const lastInput  =document.querySelector('#lname');
const emailInput  = document.querySelector('#email');
const dateOfBirth = document.querySelector('#date');
const msgpara = document.querySelector("#msg");
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value,lastInput.value,emailInput.value,dateOfBirth.value);
    const userData = {
        firstName:nameInput.value,
        lastName:lastInput.value,
        email:emailInput.value,
        dob:dateOfBirth.value
    }
    localStorage.setItem(nameInput.value,JSON.stringify(userData));
    const msg = nameInput.value + " " +lastInput.value + "-"+ emailInput.value +"-" + dateOfBirth.value;  
    let newpara = document.createElement('p');
    newpara.innerText = msg;
    msgpara.appendChild(newpara);
}