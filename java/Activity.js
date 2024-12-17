
//Navigations

function goToSignIn() {
    window.location.href = "Signin.html";
}
function signIn() {
    window.location.href = "Homepage.html";
    alert("Sign In clicked");
}
  
function goToHomepage() {
    // Redirect to the homepage as guest
    window.location.href = "Homepage.html"; // Adjust the URL accordingly
}
  
function createAccount() {
    // Logic for redirecting to the sign-up page
    window.location.href = "Signup.html"; // Adjust the URL accordingly
}

function signUp() {
    // Logic for sign-up validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Further validation for name, phone, etc.
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    if (name && phone) {
      // Submit the form data to the server or handle it accordingly
      alert("Sign Up successful!");
      // Redirect to home or dashboard
      window.location.href = "homepage.html"; // Adjust the URL accordingly
    } else {
      alert("Please fill all the fields!");
    }
}


  function goToPage1() {
    resetOtherIcons("homeIcon");
    window.location.href = "Homepage.html";
  }
  
  function goToPage2() {
    window.location.href = "Bookings.html";
  }
  
  function goToPage3() {
    window.location.href = "Notifications.html";
  }
  
  function goToPage4() {
    window.location.href = "Activity.html";
  }

  function resetOtherIcons(activeIconId) {
    const icons = ["homeIcon"]; // Add other icons here if needed
    icons.forEach(iconId => {
      if (iconId !== activeIconId) {
        document.getElementById(iconId).src = "resources/images/icons/home.png";
      }
    });
  }
  
  function toggleSettingsPanel() {
    const settingsPanel = document.getElementById("settingsPanel");
    settingsPanel.classList.toggle("open");
  }

  function filterAndRedirect(serviceCategory) {
    // Get the checkbox corresponding to the selected service category
    const checkboxes = document.querySelectorAll(".filter-options input[type='checkbox']");
    
    // Loop through each checkbox to find the matching category and check it
    checkboxes.forEach(checkbox => {
      if (checkbox.value === serviceCategory) {
        checkbox.checked = true;  // Check the checkbox for the selected service
      } else {
        checkbox.checked = false; // Uncheck other filters (optional)
      }
    });
    
    // Redirect to the bookings page with the selected category
    window.location.href = `bookings.html?category=${encodeURIComponent(serviceCategory)}`;
  }
  
  // Attach the event listeners to the service buttons
  document.querySelectorAll('.service-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const serviceCategory = event.target.alt;  // Use the image alt text to determine the category
      filterAndRedirect(serviceCategory);
    });
  });



//Settings
function toggleSettingsPanel() {
  document.getElementById("settingsPanel").classList.toggle("open");
}

// Placeholder functions for each setting option
function accountSettings() {
  alert("Account Settings clicked.");
}

function notificationsSettings() {
  alert("Notifications clicked.");
}

function privacySettings() {
  alert("Privacy & Security clicked.");
  window.location.href = "privacyandsecurity.html";
}

function helpSupport() {
  alert("Help & Support clicked.");
  window.location.href = "helpandsupport.html";
}

function logout() {
  alert("Log Out clicked.");
  // Add log-out logic here if necessary
}

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve all bookings from localStorage or initialize as an empty array
  const bookingsData = JSON.parse(localStorage.getItem("userBookings")) || [];
  const bookingCardsContainer = document.getElementById("booking-cards");

  const steps = [
      "Request Received",
      "Service Approved",
      "Materials Collected",
      "Service Scheduled",
      "Project Ongoing",
      "Finished"
  ];

  // Reverse the bookings data so that the most recent one is at the top
  bookingsData.reverse();

  // Function to create and render a booking card for each booking
  bookingsData.forEach((bookingData) => {
      createBookingCard(bookingData);
  });

  function createBookingCard(bookingData) {
      let currentStep = bookingData.progressStep || 0;

      const bookingCard = document.createElement("div");
      bookingCard.classList.add("booking-card");

      bookingCard.innerHTML = `
          <div class="card-header">
              <img src="${bookingData.providerLogo}" alt="${bookingData.providerName} Logo" class="provider-logo">
              <div class="provider-info">
                  <h2>${bookingData.providerName}</h2>
                  <p>Category: ${bookingData.providerCategory || "N/A"}</p>
              </div>
          </div>
          <div class="card-body">
              <ul>
                  ${bookingData.services.map(service => `<li>${service.name}: ${service.price} PHP</li>`).join("")}
              </ul>
              <p><strong>Time Frame:</strong> ${bookingData.timeFrame}</p>
              <p><strong>Home Address:</strong> ${bookingData.homeAddress}</p>
              <p><strong>Payment Method:</strong> ${bookingData.paymentMethod}</p>
          </div>
          <div class="card-footer">
              <p><em>Booking Date: ${bookingData.bookingDate}</em></p>
          </div>
          <div class="progress-container" id="progress-section-${bookingData.id}">
              <div class="progress-bar" id="progressBar-${bookingData.id}"></div>
              <div class="progress-steps">
                  ${steps.map((step, index) => `<span class="step" data-step="${index}">${step}</span>`).join("")}
              </div>
          </div>
      `;

      // Add to the container
      bookingCardsContainer.appendChild(bookingCard);

      // Toggle progress container on card click
      bookingCard.addEventListener("click", () => {
          const progressSection = bookingCard.querySelector(".progress-container");
          progressSection.classList.toggle("open");
          updateProgress();
      });

      // Prevent collapsing when clicking inside the progress container
      const progressSection = bookingCard.querySelector(".progress-container");
      progressSection.addEventListener("click", (event) => {
          event.stopPropagation();
      });

      // Add click events to each step to jump to that step
      bookingCard.querySelectorAll(".progress-steps .step").forEach(step => {
          step.addEventListener("click", (event) => {
              const targetStep = parseInt(event.target.dataset.step);
              if (currentStep !== targetStep) {
                  // Update current step and notify user
                  createProgressNotification(bookingData, currentStep, targetStep);

                  currentStep = targetStep;
                  bookingData.progressStep = currentStep;
                  saveBookingsData();
                  updateProgress();
              }
          });
      });

      function updateProgress() {
          const progressBar = bookingCard.querySelector(`#progressBar-${bookingData.id}`);
          const progressSteps = bookingCard.querySelectorAll(".progress-steps .step");

          // Calculate width as a percentage of steps completed
          progressBar.style.width = `${(currentStep / (steps.length - 1)) * 85}%`;

          // Update each step's visual state
          progressSteps.forEach((step, index) => {
              if (index <= currentStep) {
                  step.classList.add("completed");
              } else {
                  step.classList.remove("completed");
              }
          });
      }

      // Initialize the progress display for each card
      updateProgress();
  }

  // Save the updated bookings data back to localStorage
  function saveBookingsData() {
      localStorage.setItem("userBookings", JSON.stringify(bookingsData));
  }

  // Create a progress notification and save to localStorage
  function createProgressNotification(bookingData, oldStep, newStep) {
      let message;
      
      // Check if the last step "Finished" is selected
      if (newStep === steps.length - 1) {
          message = `${bookingData.providerName} is finished with the assigned work! Thank you for booking through Nest Knockers!`;
      } else {
          message = `${bookingData.providerName} has successfully finished with "${steps[oldStep]}", moving on to "${steps[newStep]}".`;
      }

      const notificationData = {
          message,
          time: new Date().toLocaleString()
      };

      // Retrieve existing notifications or initialize as an empty array
      let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
      notifications.push(notificationData);
      localStorage.setItem("notifications", JSON.stringify(notifications));
  }
});
