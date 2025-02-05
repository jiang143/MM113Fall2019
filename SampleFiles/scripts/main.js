const StarTrekTweet = {
    name: 'Star Trek',
    handle: '@StarTrek',
    text: 'Welcome to the OFFICIAL Star Trek Twitter Page!'
}

const links = ['https://twitter.com/StarTrek', 'https://twitter.com/StarTrek', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/26/1530003551-star-trek.jpg']

const modifyText = () => {
  //Change the text of message2 to be the message of the StarTrekTweet object
  //Change the text of user2 to be the handle from the StarTrekTweet object
  //Changes the text of message 2 class to be the handle from the StarTrekTweet object
  // YOUR CODE BELOW THIS LINE.
  document.getElementById('message2').innerHTML = StarTrekTweet.text;
  document.querySelector('#link2').innerHTML = StarTrekTweet.handle;
  document.getElementById('user2').innerHTML = StarTrekTweet.name;
    
}

const changeLinkAndImageAttributes = () => {
  //Set the href attribute for link1 to point to the first element in the links array
  //Sets the href attribute for link2 to point to the second element in the links array
  //Sets the src attribute for the Ohlone image to point to the third element in the links array
  // YOUR CODE BELOW THIS LINE.
    document.query.Selector('#link1').href = links[0];
    document.query.Selector('#link2').href = links[1];
    document.query.Selector('#Ohlone').src = links[2];
}

const changeClassAttribute = () => {
  //Update the changeClassAttribute
  //function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.
  // change id="tweet1" class="tweet" to id="tweet1" class="tweet-pink"
  // YOUR CODE BELOW THIS LINE
    document.getElementById('tweet1').className = 'tweet-pink'
    
}

const appendElements = () => {
  //A. An "a" element (a link) to the bottom of tweet1 that links to Ohlone College
  //(http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
  //B. An "img" element (an image) to the bottom of tweet1 that
  //points to an image of your choice,symbolizing something about the course.
  //id="tweet1"
  // YOUR CODE BELOW THIS LINE
    const newLink = document.creatElement ('a');
    newLink.href = 'http://www.ohlone.edu';
    newLink.appendChild(document.creatTextNode('Intro to JavaScript'));
    document.getElementById('tweet1').appendChild(newLink);
    const img = document.creatElement('img');
    img.src = "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg";
    document.getElementById('tweet1').appendChild(img);
}
