// script.js

document.querySelectorAll('.member-card button').forEach(button => {
    button.addEventListener('click', (event) => {
      const personName = event.target.parentElement.querySelector('h3').textContent;
      alert(`You are contacting ${personName}.`);
    });
  });
  
 // Show chatbox when the "Contact" button is clicked
function openChatbox() {
  document.getElementById('chatbox').style.display = 'block';
}

// Close chatbox when the "X" is clicked
function closeChatbox() {
  document.getElementById('chatbox').style.display = 'none';
}

// Display the user message and simulate an administrator response
function sendMessage() {
  var userMessage = document.getElementById('chat-input').value;
  if (userMessage.trim() === '') return; // Don't send empty messages

  // Display user message
  var userMessageElement = document.createElement('div');
  userMessageElement.classList.add('chat-message', 'user');
  userMessageElement.innerText = userMessage;
  document.getElementById('chat-history').appendChild(userMessageElement);

  // Scroll to the bottom of the chatbox
  document.getElementById('chat-history').scrollTop = document.getElementById('chat-history').scrollHeight;

  // Clear input field
  document.getElementById('chat-input').value = '';

  // Simulate sending message to the administrator and receiving a response after a delay
  setTimeout(function () {
    var adminResponse = "Thank you for reaching out! Our administrator will get back to you soon.";

    // Display the administrator's response
    var adminResponseElement = document.createElement('div');
    adminResponseElement.classList.add('chat-message');
    adminResponseElement.innerText = adminResponse;
    document.getElementById('chat-history').appendChild(adminResponseElement);

    // Scroll to the bottom of the chatbox
    document.getElementById('chat-history').scrollTop = document.getElementById('chat-history').scrollHeight;
  }, 1000);
}
