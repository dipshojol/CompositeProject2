"use strict";

// alert("this is my js")
jQuery(document).ready(() => {
    jQuery('.signup-btn').on('click', () => {
        let myemail = jQuery('#email').val();
        let mypassword = jQuery('#pwd').val();

        console.log(myemail);
        console.log(mypassword);

        if (myemail && mypassword) {
            localStorage.setItem('Email', myemail);
            localStorage.setItem('Password', mypassword);
        }

        if (myemail.length >= 3 && mypassword.length >= 3) {
            console.log("corrent");
            window.location = '../other-pages/sign-in.html';
            // window.open('../other-pages/review.html');
        } else {
            jQuery('.please-enter').html("Please enter you email and password");
        }

        // jQuery('#result').html(`user: ${myemail}</br> password: ${mypassword}`);
    });


    jQuery('.signin-btn').on('click', () => {
        let youremail = jQuery('#youremail').val();
        let yourpassword = jQuery('#yourpassword').val();

        // for (var i = 0; i < localStorage.length; i++) {
        //     const key = localStorage.key(i);
        //     const value = localStorage.getItem(key);

        //     console.log(`${key}: ${value}`);

        //     if (youremail == `${value}` && yourpassword == `${value}`) {
        //         console.log(youremail);
        //     }
        // }
        const emailvalue = localStorage.getItem("Email");
        const passwordvalue = localStorage.getItem("Password");

        if (youremail == `${emailvalue}` && yourpassword == `${passwordvalue}`) {
            console.log("corrent");
            window.location = '../other-pages/review.html';
            // window.open('../other-pages/review.html');
        } else {
            jQuery('.wrong-pass').html("incorrect User or Password!!");
        }



    });
});