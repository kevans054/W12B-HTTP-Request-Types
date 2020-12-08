// Assignment W12B
// Karen Evans
// December 8, 2020

class GetTweet {

   
    constructor(getTweet) {

        this.getNewTweet();
    }

    //method get a new tweet
    getNewTweet() {

        let button = document.querySelector('.tweet-get');
        button.addEventListener('click', function () {
            //creating a new request object 
            let ajax = new XMLHttpRequest();


            //define our ajax callback function(i.e. what happens when we send the request)
            ajax.onreadystatechange = function () {
                //was the request completed successfully
                if (this.readyState == 4 && this.status == 200) {
                        let text = JSON.parse(this.responseText);
                        let tweetBody = "";
                        let tweetTitle = "";
                        let twtID = "";
                        var i = 0;

                        for (i in text) {

                            
                            tweetBody = text[i].body;
                            tweetTitle = text[i].title;
                            twtID = text[i].id;

                            let twtelement = document.createElement('textarea');
                            let elementNode = document.createTextNode('Tweetid: ' +'' + twtID + '   ' + 'Title: ' + tweetTitle+'  ' + 'Tweet Message: ' + tweetBody);
                            twtelement.appendChild(elementNode);
                            let updateBTN = document.createElement('button');
                            let nextTweetElement = document.querySelector('div#tweets');
                            nextTweetElement.appendChild(twtelement);
                            nextTweetElement.appendChild(updateBTN);
                            i++;
                            
                            };
               
                }
            }


            ajax.open("GET", 'https://jsonplaceholder.typicode.com/posts', true);
            //send ajax request
            ajax.send();

        });

        // button.click();
    };
            
};

let tweet = new GetTweet();

""