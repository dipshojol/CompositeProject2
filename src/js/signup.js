"use strict";

(() => {
    // your page initialization code here
    // the DOM will be available here
    const suButton = document.querySelector(".signup-btn");
    suButton.addEventListener(`click`, event => { //on click event listerner for signup button

        let suEmail = document.getElementById('email').value; //get value from email input
        let suPassword = document.getElementById('pwd').value; //get value from password input
        let suPasswordCon = document.getElementById('confirm-pwd').value; //get value from confirm password input

        if (suEmail && suPassword == suPasswordCon && suEmail.length >= 5 && suPassword.length >= 5) {
            localStorage.setItem('Email', suEmail);
            localStorage.setItem('Password', suPassword);

            window.location = '../other-pages/sign-in.html';
        } else {
            document.querySelector('.please-enter').innerHTML("Please enter you email and password");
        }
    });
})();