"use strict";

(() => {

    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; //if the localstorage data true then parsing data into js object
    const data = JSON.parse(localStorage.getItem('items'));//parsing data into js object
    const myTweet = document.getElementById('tweet-text');
    const ul = document.querySelector('ul');

    const username = localStorage.getItem("Email");//getting ligedin email

    const liMaker = (text) => {
        const li = `<li class='inner-li row'><div class='avatar col-1'><div class="inner-avatar"><img src="../../assets/twitter-avatar.png" alt=""></div></div><div class='user-name col-11'><span>${username}</span><p class='col-11 user-tweet'>${text}</p></div></li>`;
        jQuery('#tweeted').append(li);
    }

    document.querySelector('.tweet-btn').addEventListener('click', (e) => {
        
        e.preventDefault();

        if (myTweet.value) {//if there is any tweet in the localstorage
            let tweetvalue = `${myTweet.value}`;

            itemsArray.push(tweetvalue);//push into the array
            localStorage.setItem('items', JSON.stringify(itemsArray)); //then set into the localstorage
            liMaker(tweetvalue);//displaying into the dom
            tweetvalue = ""; 
        }
    });

    data.forEach(item => {
        liMaker(item);
    });

    document.querySelector('.clear-btn').addEventListener('click', () => {//event to clean up dom and localstorage
        localStorage.clear();
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        itemsArray = [];
    });

    document.getElementById('myInput').addEventListener('keyup', () => { //event will trigger everytime key up

        let li = document.querySelectorAll('li.inner-li'); //get all the li's

        //loop through all user messages from li > p
        for (let j = 0; j < li.length; j++) {

            let p = li[j].getElementsByTagName('p')[0];

            if (p.innerHTML.toUpperCase().indexOf(jQuery('#myInput').val().toUpperCase()) > -1) {
                li[j].style.display = '';
            } else {
                li[j].style.display = 'none';
            }
        }
    });
})();