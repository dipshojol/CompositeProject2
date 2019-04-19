let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const myTweet = document.getElementById('tweet-text');
const ul = document.querySelector('ul');

const username = localStorage.getItem("Email");

const liMaker = (text) => {
    const li = `<li class='inner-li row'><div class='avatar col-1'><div class="inner-avatar"><img src="../../assets/twitter-avatar.png" alt=""></div></div><div class='user-name col-11'><h6>${username}</h6><p class='col-11'>${text}</p></div></li>`;

    jQuery('#tweeted').append(li);
}

jQuery('.tweet-btn').on('click', (e) => {
    e.preventDefault();

    itemsArray.push(myTweet.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(myTweet.value);
    console.log(`${itemsArray}`);
    myTweet.value = "";
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