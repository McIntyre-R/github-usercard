/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardCreator(obj){
  const newCard = document.createElement('div'),
        newImage = document.createElement('img'),
        newCardInfo = document.createElement('div'),
        newName = document.createElement('h3'),
        newUserName = document.createElement('p'),
        newLocation = document.createElement('p'),
        newProfile = document.createElement('p'),
        newLink = document.createElement ('a'),
        newFollowers = document.createElement ('p'),
        newFollowing = document.createElement('p'),
        newBio = document.createElement('p');

  newImage.src = obj.avatar_url;
  newName.textContent = obj.name;
  newUserName.textContent = obj.login;
  newLocation.textContent = `Location ${obj.location}`;
  newProfile.textContent = 'Profile:'
  newLink.textContent = obj.html_url;
  newLink.href = obj.html_url;
  newFollowers.textContent = `Followers: ${obj.followers}`;
  newFollowing.textContent = `Following: ${obj.following}`;
  newBio.textContent = `Bio: ${obj.bio}`;

  newCard.classList.add('card');
  newCardInfo.classList.add('card-info');
  newName.classList.add('name');
  newUserName.classList.add('username');

  newCard.appendChild(newImage);
  newCard.appendChild(newCardInfo);
  newCardInfo.appendChild(newName);
  newCardInfo.appendChild(newUserName);
  newCardInfo.appendChild(newLocation);
  newCardInfo.appendChild(newProfile);
  newProfile.appendChild(newLink);
  newCardInfo.appendChild(newFollowers);
  newCardInfo.appendChild(newFollowing);
  newCardInfo.appendChild(newBio);

 

  return newCard
}

const cards = document.querySelector('.cards');

axios.get("https://api.github.com/users/mcintyre-r")
.then(response => {
  console.log(response.data);
  cards.append(cardCreator(response.data)); 
})
.catch(error => {
  console.log("the data was not returned", error);
})



const followersArray = [];


axios.get('https://api.github.com/users/mcintyre-r/followers')
.then(response => {
  response.data.forEach(e => {
    followersArray.push('https://api.github.com/users/' + e.login)
  })
  followersArray.forEach(e => {
    axios.get(e)
    .then(response => {
      cards.append(cardCreator(response.data)); 
    })
    .catch(error => {
      console.log("the data was not returned", error);
    })
  })
})















