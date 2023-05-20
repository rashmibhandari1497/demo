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
    localStorage.setItem(emailInput.value,JSON.stringify(userData));
    const msg = nameInput.value + " " +lastInput.value + "-"+ emailInput.value +"-" + dateOfBirth.value;  
    let newdiv = document.createElement('div');
    let newbtn = document.createElement('button');
    newbtn.innerText="delete";
    let newpara = document.createElement('p');
    newdiv.setAttribute('id',`${emailInput.value}`);
    newbtn.addEventListener('click', ()=>{deletefn(emailInput.value)});
    newpara.innerText = msg;
    newdiv.append(newpara,newbtn);
    msgpara.appendChild(newdiv);
}
function deletefn(email){
    document.getElementById(email).remove();
    localStorage.removeItem(email);
}