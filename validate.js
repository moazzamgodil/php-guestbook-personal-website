function formValidation() {
    var username = document.GuestBookForm.name;
    var useremail = document.GuestBookForm.email;
    var usergender = document.GuestBookForm.gender;
    var usercountry = document.GuestBookForm.country;
    var usercomments = document.GuestBookForm.comments;


    //Name

    var letters = /^[A-Za-z\s]+$/;
    if (username.value.length == 0) {
        alert("Name field can't be empty!");
        username.focus();
        return false;
    }

    if (!username.value.match(letters)) {
        alert('Name must have alphabet characters only');
        username.focus();
        return false;
    }


    //Email

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (useremail.value.length == 0) {
        alert("The email can't be empty!");
        useremail.focus();
        return false;
    }

    if (!useremail.value.match(mailformat)) {
        alert("You have entered an invalid email address!");
        useremail.focus();
        return false;
    }


    //Gender

    var ValidGender = false;

    var i = 0;
    while (!ValidGender && i < usergender.length) {
        if (usergender[i].checked) ValidGender = true;
        i++;
    }

    if (!ValidGender) {
        alert("Must Select Male / Female");
        return false
    }


    //Country

    var letters = /^[A-Za-z\s]+$/;
    if (usercountry.value.length == 0) {
        alert("The country can't be empty!");
        usercountry.focus();
        return false;
    }

    if (!usercountry.value.match(letters)) {
        alert('Country must have alphabet characters only');
        usercountry.focus();
        return false;
    }


    //Comments

    if (usercomments.value.length == 0) {
        alert("Comments can't be empty!");
        usercomments.focus();
        return false;
    }

    return true
}