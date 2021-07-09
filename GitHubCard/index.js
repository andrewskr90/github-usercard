import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const entryPoint = document.querySelector('.cards')

axios.get('https://api.github.com/users/andrewskr90')
  .then(response => {
    console.log(response.data)
    const madeCard = cardMaker(response.data)
    console.log(madeCard)
    entryPoint.appendChild(madeCard)
    // console.log(response.data)
  })
  .catch(err => console.log(err.message))
  .finally(() => console.log('done'))
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      const madeCard = cardMaker(response.data)
      entryPoint.appendChild(madeCard)
    })
    .catch(err => console.log(err.message))
    .finally(() => console.log('done'))
})



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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


  function cardMaker(profileInfo){

    const cardTop = document.createElement('div')
    const img = document.createElement('img')
    const cardInfo = document.createElement('div')
    const nameH = document.createElement('h3')
    const username = document.createElement('p')
    const locationP = document.createElement('p')
    const profile = document.createElement('p')
    const address = document.createElement('a')
    const followersP = document.createElement('p')
    const followingP = document.createElement('p')
    const bioP = document.createElement('p')

    cardTop.classList.add('card')
    img.setAttribute('src', profileInfo.avatar_url)
    cardInfo.classList.add('card-info')
    nameH.classList.add('name')
    nameH.textContent = profileInfo.name
    username.classList.add('username')
    username.textContent = profileInfo.login
    location.textContent = `Location: ${profileInfo.location}`
    profile.textContent = 'Profile:'
    address.setAttribute('href', profileInfo.html_url)
    address.textContent = profileInfo.html_url
    followersP.textContent = `Followers:${profileInfo.followers}`
    followingP.textContent = `Following:${profileInfo.followers}`
    bioP.textContent = `Bio:${profileInfo.bio}`

    cardTop.appendChild(img)
    cardTop.appendChild(cardInfo)
    cardInfo.appendChild(nameH)
    cardInfo.appendChild(username)
    cardInfo.appendChild(locationP)
    cardInfo.appendChild(profile)
    profile.appendChild(address)
    cardInfo.appendChild(followersP)
    cardInfo.appendChild(followingP)
    cardInfo.appendChild(bioP)

    return cardTop
    
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
