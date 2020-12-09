// Assignment W12B
// Karen Evans
// December 8, 2020


class GetTweet {
    apiUrl = 'https://jsonplaceholder.typicode.com';
    title = '';
    body = '';
    userId = null;
    id = null;
    
    constructor(id) {
        this.id = id;
  
        this.getNewTweet();
    }

    //method get a new tweet
    getNewTweet() {

        //creating a new request object 
        let ajax = new XMLHttpRequest();
        let self = this;

        //define our ajax callback function(i.e. what happens when we send the request)
        ajax.onreadystatechange = function () {
            //was the request completed successfully
            if (this.readyState == 4 && this.status == 200) {
                let Text = JSON.parse(this.responseText);

                var i = 0;

                for (i in Text) {
                           
                    self.body = Text[i].body;
                    console.log(self.body);
                    self.title = Text[i].title;
                    self.twtId = Text[i].id;
                    self.userId = Text[i].userid;

                    let postingDiv = document.querySelector('.tweets-container');
                    let twtelement = document.createElement('textarea');
                    let elementNode = document.createTextNode('Tweetid: ' + '' + self.twtId + '   ' + 'Title: ' + self.title + '  ' + 'Tweet Message: ' + self.body);
                    let updateBTN = document.createElement('button');
                    updateBTN.addEventListener('click', UpdateTweet);
                    updateBTN.innerText = "Update this tweet";
                    twtelement.appendChild(elementNode);
                    postingDiv.appendChild(twtelement);
                    postingDiv.appendChild(updateBTN);
                    twtelement.addEventListener('click', function () {
                        let deleteid = self.twtId;
                        self.deletetweet(deleteid);
                    });
                   
                    i++;
                            
                };
            }
        }

        ajax.open("GET", 'https://jsonplaceholder.typicode.com/posts', true);
        //send ajax request
        ajax.send();
    };

    deletetweet() {
        
        let ajax = new XMLHttpRequest();

        // what happens when we send our ajax request
        let self = this;
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert('DELETE SUCCESSFUL');
            }
        } 

        // prepare the request
        ajax.open('DELETE', `${this.apiUrl}/posts/${this.id}`, true);

        // firing off the request
        ajax.send();
    }
   
};
let tweet = new GetTweet(20);

