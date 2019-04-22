"use strict";

jQuery(document).ready(() => {

    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    localStorage.setItem('items', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('items'));
    const myTweet = document.getElementById('tweet-text');
    const ul = document.querySelector('ul');

    const username = localStorage.getItem("Email");

    const liMaker = (text) => {

        const li = `<li class='inner-li row'><div class='avatar col-1'><div class="inner-avatar"><img src="../../assets/twitter-avatar.png" alt=""></div></div><div class='user-name col-11'><h6>${username}</h6><p class='col-11 user-tweet'>${text}</p></div></li>`;

        jQuery('#tweeted').append(li);
    }

    jQuery('.tweet-btn').on('click', (e) => {
        e.preventDefault();

        if (myTweet.value) {

            let tweetvalue = `${myTweet.value}`;

            itemsArray.push(tweetvalue);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            liMaker(tweetvalue);
            // console.log(`${itemsArray}`);
            tweetvalue = "";
        }
    });

    data.forEach(item => {
        liMaker(item);
    });

    jQuery('.clear-btn').on('click', () => {
        localStorage.clear();
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        itemsArray = [];
    });

    // search start here

    // let filterInput = jQuery('#myInput');

    // add event listener

    jQuery('#myInput').on('keyup', () => {
        // get message from the ul
        let ul = document.getElementById('#tweeted');
        let li = document.querySelectorAll('li.inner-li'); //get all the lis from ul > li

        //loop through all user messages from li > p
        for (let j = 0; j < li.length; j++) {

            let p = li[j].getElementsByTagName('p')[0];

            // console.log(p.innerHTML.toUpperCase().indexOf(filterInput));


            if (p.innerHTML.toUpperCase().indexOf(jQuery('#myInput').val().toUpperCase()) > -1) {
                li[j].style.display = '';
            } else {
                li[j].style.display = 'none';
            }
        }

    });












});