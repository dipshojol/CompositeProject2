"use strict";

(() => {
    // your page initialization code here
    // the DOM will be available here
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    localStorage.setItem('items', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('items'));
    const myTweet = document.getElementById('tweet-text');
    const ul = document.querySelector('ul');

    const username = localStorage.getItem("Email");

    const liMaker = (text) => {
        const li = `<li class='inner-li row'><div class='avatar col-1'><div class="inner-avatar"><img src="../../assets/twitter-avatar.png" alt=""></div></div><div class='user-name col-11'><span>${username}</span><p class='col-11 user-tweet'>${text}</p></div></li>`;
        jQuery('#tweeted').append(li);
    }

    document.querySelector('.tweet-btn').addEventListener('click', (e) => {
        
        e.preventDefault();

        if (myTweet.value) {
            let tweetvalue = `${myTweet.value}`;

            itemsArray.push(tweetvalue);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            liMaker(tweetvalue);
            tweetvalue = "";
        }
    });

    data.forEach(item => {
        liMaker(item);
    });

    document.querySelector('.clear-btn').addEventListener('click', () => {
        localStorage.clear();
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        itemsArray = [];
    });

    document.getElementById('myInput').addEventListener('keyup', () => {

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