"use strict";

// alert("this is my js")
jQuery(document).ready(() => {
    jQuery('.signup-btn').on('click', () => {
        let myemail = jQuery('#email').val();
        let mypassword = jQuery('#pwd').val();
        let mypasswordTwo = jQuery('#confirm-pwd').val();

        console.log(myemail.length);
        console.log(mypassword);

        if (myemail && mypassword == mypasswordTwo && myemail.length >= 5 && mypassword.length >= 5) {
                localStorage.setItem('Email', myemail);
                localStorage.setItem('Password', mypassword);
                // }
                window.location = '../other-pages/sign-in.html';
        } else {
            jQuery('.please-enter').html("Please enter you email and password");
        }
    });


    jQuery('.signin-btn').on('click', () => {
        let youremail = jQuery('#youremail').val();
        let yourpassword = jQuery('#yourpassword').val();
        const emailvalue = localStorage.getItem("Email");
        const passwordvalue = localStorage.getItem("Password");

        if (youremail == emailvalue && yourpassword == passwordvalue && emailvalue.length >= 5 && passwordvalue.length >= 5) {
            // console.log("corrent");
            window.location = '../other-pages/review.html';
        } else {
            jQuery('.wrong-pass').html("incorrect User or Password!!");
        }
    });
});