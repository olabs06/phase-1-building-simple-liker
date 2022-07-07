// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const body = document.querySelector('body')
const modal = body.querySelector('#modal')
const p = body.querySelector('p#modal-message')

const likeArray = document.querySelectorAll('span.like-glyph')
likeArray.forEach( like =>{
  like.addEventListener('click', () => {
    mimicServerCall().then (() => {
      if(like.textContent === FULL_HEART){
        like.textContent = EMPTY_HEART
        like.className = 'like-glyph'
      }else {
        like.textContent = FULL_HEART
        like.className = 'activated-heart'
      }
    })
    .catch((e) => {
      modal.className = ''
      p.textContent = `${e}`
      setTimeout(() => modal.className = 'hidden', 3000)
    })
  })
})


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
