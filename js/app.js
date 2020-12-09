// Assignment W12B
// Karen Evans
// December 5, 2020

// Post request
function sendTweet() {
    console.log('sendTweet');
    let tweetTitle = document.getElementById('title-input');
    let tweetBody = document.getElementById('body-input');

    let tweetData = {

        title: tweetTitle,
        body: tweetBody,
        userId: 1
    }

    // ajax to send request
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        // status 201 = created
        if(this.readyState == 4 && this.status == 201){
        console.log(JSON.parse(this.responseText));
        console.log(this);

        let myMessage = document.querySelector('.alert');
        console.log(myMessage);
        myMessage.classList.toggle('show-alert');
        }
    };
// fake environment for tweeting
    ajax.open('POST', 'https://jsonplaceholder.typicode.com/posts',true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

let tweetButton = document.getElementById('tweet-submit');
tweetButton.addEventListener('click', sendTweet);


function UpdateTweet(updatedData) {
// Update request

    console.log('UpdateTweet');
    
    let tweetData = updatedData;

    // ajax to send request
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        // status 201 = created
        if(this.readyState == 4 && this.status == 200){
       
            alert('tweet updated');
            
        }
    };
// fake environment for tweeting
    ajax.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',true);
    // ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

