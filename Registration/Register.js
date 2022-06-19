function check() {
    let password1 = document.getElementById("psw").value;
   let password2 = document.getElementById("psw_repeat.value").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let ID = document.getElementById("ID_number").value;
    let number = document.getElementById("phone_number").value;

    if (password1 === '' || password2 === '' ||!(/^[A-z ]+$/.test(name)) ||
    !(/^[A-z ]+$/.test(surname)) || ID.length !== 11 || number.length !==9
    || name==='' || surname==='' || ID===''|| number===''){
        alert ("Please enter correct information");
        return false;
    }
    else if (password1 !== password2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }else {
        return true;
    }
}

function create(state){
    if (state) {
        //create user
    }
}
