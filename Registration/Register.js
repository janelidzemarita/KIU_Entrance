function checkPassword(form) {
    let password1 = form.psw.value;
    let password2 = form.psw - repeat.value;

    if (password1 == '')
        alert("Please enter Password");

    else if (password2 == '')
        alert("Please repeat password");

    else if (password1 != password2) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }
}
