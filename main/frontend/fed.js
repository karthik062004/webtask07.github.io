document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const rating = document.querySelector('input[name="rating"]:checked');
  
    // Simple validation check
    if (!email || !feedback || !rating) {
      alert("Please complete all fields.");
      return;
    }
  
    // Hide form and show thank you message
    document.querySelector(".feedback-form").style.display = "none";
    document.getElementById("thank-you-message").classList.remove("hidden");
  
    // Log form data (for demo purpose, you can send data to a server here)
    console.log({
      email,
      feedback,
      rating: rating.value,
    });
  });
  