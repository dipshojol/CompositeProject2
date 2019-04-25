"use strict";

(() => {
    // your page initialization code here
    // the DOM will be available here
    const siButton = document.querySelector(".signin-btn");
    siButton.addEventListener('click', event => { // vanila js class selector

        let siEmail = document.getElementById('signinEmail').value; //id selector with value
        let siPassword = document.getElementById('signinPassword').value; //id selector with value

        const emailFromLh = localStorage.getItem("Email"); //rendering localstorage value
        const passwordFromLh = localStorage.getItem("Password"); //rendering localstorage value

        if (siEmail == emailFromLh && siPassword == passwordFromLh) { //when typed email/pass and localstorage email/pass matched
            window.location = '../other-pages/review.html'; //go to review page
        } else {
            document.querySelector('.wrong-pass').innerHTML ="incorrect User or Password!!"; //through an wornning message
        }
    });
})();