// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//invoke mimicServerCall() to a user action 
// and the function will randomly return either a "success" or "fail"
// code will then need to handle the response updating the appearance of the heart if successful 
// and siplaying an error in the DOM otherwise 

// Add the .hidden class to the error modal in the HTML 
// so it doesn't appear when the page first loads 

//User clicks on empty heart, invoke mimicServerCall
//When the "server" returns a failure:
// Use a .catch(() => {}) after your .then(() => {})

//document.addEventListener("DOMContentLoaded", () => {
//Grab All the .like-glyph. 
//B/c its part of a <span> use . notation 
const heartBtn = document.querySelectorAll(".like-glyph");

//every heart event that was clicked, invoke likeCallBack Function
for (const glyph of heartBtn) {
  glyph.addEventListener("click", likeCallBack)
}

//Get the target (the whole span class so that we can minipulate the heart)
// set e.target to heart, call url (like fetch) and change innertext to full heart
function likeCallBack(e) {
  const heart = e.target
  mimicServerCall("bogusUrl")
  .then(function(){
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart"
    } else {
      heart.innerText = EMPTY_HEART
      heart.className = ""
    }
  })
  .catch(function(error) {
    const modal = document.getElementById("modal")
    modal.className = ""
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000)

  })
}

//})





//For each heart-glyph, console.log that it was clicked
//for (const glyph of heartBtn) {
//  glyph.addEventListener("click", () => {
//    console.log("clicked")
//  })
//}

//Console.log to see if callback is working
//function likeCallBack(e) {
//  console.log("clicked")
//} => clicked

//Get the target (the whole span class so that we can minipulate the heart)
//function likeCallBack(e) {
//  console.log(e.target)
//}
//}) => <span class="like-glyph">♡</span>

//Get the target (the whole span class so that we can minipulate the heart)
// set e.target to heart, call url (like fetch) and change innertext to full heart
// heart.className will call the "activated-heart" class in the CSS style sheet and change the color to red
//function likeCallBack(e) {
//  const heart = e.target
//  mimicServerCall("bogusUrl")
//    .then(function () {
//      if (heart.innerText === EMPTY_HEART) {
//        heart.innerText = FULL_HEART;
//        heart.className = "activated-heart"
//      }
//    })
//}

// .catch, invokes error function, get modal class, and call  setTime out function
// on it
//  .catch(function (error) {
//    const modal = document.getElementById("modal")
//    modal.className = ""
//    modal.innerText = error;
//    setTimeout(() => modal.className = "hidden", 3000)
//
//  })
//}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
