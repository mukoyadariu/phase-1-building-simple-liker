// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

// Add a hidden modal
const modal = document.createElement('div');
modal.id = 'hiddenModal';
modal.className = 'hidden';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close" id="closeModal">&times;</span>
    <h2>Hidden Modal</h2>
    <p>This is a hidden modal.</p>
  </div>
`;

document.body.appendChild(modal);

// Function to open the hidden modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the hidden modal
function closeModal() {
  modal.style.display = 'none';
}

// Add event listener to open the hidden modal
document.getElementById('modalButton').addEventListener('click', openModal);

// Add event listener to close the hidden modal
document.getElementById('closeModal').addEventListener('click', closeModal);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
