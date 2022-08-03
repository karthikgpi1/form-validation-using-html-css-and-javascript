const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs

    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernamevalue === ''){
        //show error
        //add error class
         setErrorFor(username, 'Username cannot be blank');
    }else{
        //add success class 
        setSuccessFor(username);
    }


    if(emailvalue === ''){
        setErrorFor(email, 'Email cannot be a blank');
    }else if(!isEmail(emailvalue)){
        setErrorFor(email,'email is not valid');
    }else{
        setSuccessFor(email);
    }


    if(passwordValue ===''){
        setErrorFor(password, 'Password cannot be a blank');
    }else{
        setSuccessFor(password);
    }


    if(password2Value ===''){
        setErrorFor(password2, 'confirm password cannot be a blank');
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords does not match');
    }else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const formcontrol = input.parentElement;  //form-control
    const small = formcontrol.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formcontrol.className = 'form-control error';
}

function setSuccessFor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}